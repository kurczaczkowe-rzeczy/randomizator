import { db } from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';

export const formsSubscription = (
  userID,
  snapshotFunction,
  setFormID,
) => db.collection( userID )
  .onSnapshot(( snap ) => { // ToDo should put this into hook
    if ( setFormID ) {
      setFormID( snap.docs );
    }
    _forEach( snap.docs, snapshotFunction );
  });
