import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  compose, createStore, applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { db } from 'config/firebaseConfig';

const store = createStore( rootReducer, compose(
  applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore( db ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

/* const store = createStore( rootReducer,
     compose(
       applyMiddleware( thunk.withExtraArgument({ getFirebase, getFirestore })),
       reduxFirestore( db ),
       reactReduxFirebase( db ),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     )); */

ReactDOM.render( <React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>,
  document.getElementById( 'root' ));

/* If you want your app to work offline and load faster, you can change
   unregister() to register() below. Note this comes with some pitfalls.
   Learn more about service workers: https://bit.ly/CRA-PWA */
serviceWorker.unregister();
