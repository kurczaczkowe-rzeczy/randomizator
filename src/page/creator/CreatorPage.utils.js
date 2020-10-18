import { db } from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';

export const formsSubscription = ( userID, func ) => db.collection( userID )
  .onSnapshot(( snap ) => {
    _forEach( snap.docs, func );
  });
