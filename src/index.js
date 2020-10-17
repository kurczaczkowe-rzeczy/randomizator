import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import { firebase } from 'config/firebaseConfig';
import rootReducer from 'store/reducers/rootReducer';

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore( rootReducer,
  compose(
    reduxFirestore( firebase ),
    applyMiddleware( thunk.withExtraArgument({
      getFirebase,
      getFirestore,
    })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

const rrfProps = {
  firebase,
  config: {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const render = (
  <Provider store={ store }>
    <ReactReduxFirebaseProvider { ...rrfProps }>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render( render, document.getElementById( 'root' ));

/* If you want your app to work offline and load faster, you can change
   unregister() to register() below. Note this comes with some pitfalls.
   Learn more about service workers: https://bit.ly/CRA-PWA */
serviceWorker.unregister();
