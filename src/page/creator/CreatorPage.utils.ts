/* eslint-disable */
import { db } from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';

type returnedType = () => void;

export const formsSubscription = (
  userID: string,
  snapshotFunction: ( doc: any ) => void,
  setFormID?: ( formID: any ) => void,
): returnedType => db.collection( userID )
  .onSnapshot(( snap ) => { // ToDo should put this into hook
    if ( setFormID ) {
      setFormID( snap.docs );
    }
    _forEach( snap.docs, snapshotFunction );
  });
