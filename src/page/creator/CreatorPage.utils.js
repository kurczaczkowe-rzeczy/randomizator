import { db } from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';

export const formsSubscription = (
  userID,
  snapshotFunction,
  setFormID,
) => db.collection( userID )
  .onSnapshot(( snap ) => {
    if ( setFormID ) {
      setFormID( snap.docs );
    }
    _forEach( snap.docs, snapshotFunction );
  });
