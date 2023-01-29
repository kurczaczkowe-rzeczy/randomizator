/* eslint-disable */
export function attachBroadcastChannelPolyfill() {
  ( function ( global ) {
    const channels = [];

    function BroadcastChannel( channel ) {
      const $this = this;

      channel = String( channel );

      const id = `$BroadcastChannel$${ channel }$`;

      channels[ id ] = channels[ id ] || [];
      channels[ id ].push( this );

      this._name = channel;
      this._id = id;
      this._closed = false;
      this._mc = new MessageChannel();
      this._mc.port1.start();
      this._mc.port2.start();

      global.addEventListener( 'storage', ( e ) => {
        if ( e.storageArea !== global.localStorage ) { return; }
        if ( e.newValue === null ) { return; }
        if ( e.key.substring( 0, id.length ) !== id ) { return; }
        const data = JSON.parse( e.newValue );

        $this._mc.port2.postMessage( data );
      });
    }

    BroadcastChannel.prototype = {
      // BroadcastChannel API
      get name() { return this._name; },
      postMessage( message ) {
        const $this = this;

        if ( this._closed ) {
          const e = new Error();

          e.name = 'InvalidStateError';
          throw e;
        }
        const value = JSON.stringify( message );

        // Broadcast to other contexts via storage events...
        const key = `${ this._id + String( Date.now()) }$${ String( Math.random()) }`;

        global.localStorage.setItem( key, value );
        setTimeout(() => { global.localStorage.removeItem( key ); }, 500 );

        // Broadcast to current context via ports
        channels[ this._id ].forEach(( bc ) => {
          if ( bc === $this ) { return; }
          bc._mc.port2.postMessage( JSON.parse( value ));
        });
      },
      close() {
        if ( this._closed ) { return; }
        this._closed = true;
        this._mc.port1.close();
        this._mc.port2.close();

        const index = channels[ this._id ].indexOf( this );

        channels[ this._id ].splice( index, 1 );
      },

      // EventTarget API
      get onmessage() { return this._mc.port1.onmessage; },
      set onmessage( value ) { this._mc.port1.onmessage = value; },
      addEventListener( type, listener /* , useCapture*/ ) {
        return this._mc.port1.addEventListener.apply( this._mc.port1, arguments );
      },
      removeEventListener( type, listener /* , useCapture*/ ) {
        return this._mc.port1.removeEventListener.apply( this._mc.port1, arguments );
      },
      dispatchEvent( event ) {
        return this._mc.port1.dispatchEvent.apply( this._mc.port1, arguments );
      },
    };

    global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel;
  }( self ));
}
