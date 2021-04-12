import { db } from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';
import firebase from 'firebase';
import { IForm } from 'page/creator/CreatorPage.types';

type returnedType = () => void;

export const formsSubscription = (
  userID: string,
  snapshotFunction: ( doc: firebase.firestore.DocumentSnapshot ) => void,
  setFormID?: ( formID: IForm[]) => void,
): returnedType => db.collection( userID )
  .onSnapshot(( snap ) => { // ToDo should put this into hook
    if ( setFormID ) {
      const forms: IForm[] = [];

      snap.forEach(( doc ) => {
        forms.push({ id: doc.id, name: doc.data().name });
      });

      setFormID( forms );
    }
    _forEach( snap.docs, snapshotFunction );
  });

export const fomCollection = async ( userID: string,
  formID: string ): Promise<firebase.firestore.DocumentData | undefined> => {
  try {
    const getFormDate = await db.collection( userID ).doc( formID )
      .get();

    return await getFormDate.data();
  } catch ( e: unknown ) {
    console.error( e );
  }
};

export const getNewFileName = (): string => {
  const date = new Date();
  const datePart = `${ date.getFullYear() }${ date.getMonth() + 1 }${ date.getDate() }`;
  const timePart = `${ date.getHours() }${ date.getMinutes() }${ date.getSeconds() }`;

  return `${ datePart }${ timePart }`;
};
