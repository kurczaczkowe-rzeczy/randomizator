import { MAIN_BROADCAST_CHANNEL } from 'constans';
import useEffectOnce from 'hooks/useEffectOnce';
import { useEffect, useMemo } from 'react';

interface IUseBroadcastChannelOptions {
  /**
   * A string representing the name of the channel.
   * Default name is **randomizator**, it is used for sharing global data.
   */
  channelName?: string;
  /** Method fired when message arrives on channel. */
  onMessage: ( event: MessageEvent ) => void;
  /**
   * If *false* message listener will be updated every time the onMessage and channel change.
   * If *true* message listener will be added only once after first render and removed after component unmount.
   */
  runsOnce?: boolean;
}

interface IUseBroadcastChannelReturn {
  /** Method that send data passed through arguments to broadcast channel. */
  sendData: BroadcastChannel[ 'postMessage' ];
}

/**
 * Hook create broadcast channel with name provided by **channelName** param.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel} for more information about BroadcastChannel.
 */
const useBroadcastChannel = ({
  onMessage,
  channelName = MAIN_BROADCAST_CHANNEL,
  runsOnce = true,
}: IUseBroadcastChannelOptions ): IUseBroadcastChannelReturn => {
  const channel = useMemo(() => new BroadcastChannel( channelName ), [ channelName ]);

  useEffectOnce(() => {
    if ( !runsOnce ) { return; }

    channel.addEventListener( 'message', onMessage );

    return () => {
      channel.removeEventListener( 'message', onMessage );
    };
  });

  useEffect(() => {
    if ( runsOnce ) { return; }

    channel.addEventListener( 'message', onMessage );

    return () => {
      channel.removeEventListener( 'message', onMessage );
    };
  }, [ channel, onMessage, runsOnce ]);

  return { sendData: ( data ) => { channel.postMessage( data ); } };
};

export default useBroadcastChannel;
