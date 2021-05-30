import { readString } from 'react-papaparse';
import firebase from 'firebase';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';

import { db } from 'config/firebaseConfig';
import { IAnswers, IForm } from 'page/creator/CreatorPage.types';

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

export const getFormCollection = async ( userID: string,
  formID: string ): Promise<firebase.firestore.DocumentData | undefined> => {
  try {
    const getFormDate = await db.collection( userID ).doc( formID )
      .get();

    return await getFormDate.data();
  } catch ( error: unknown ) { console.error( 'Error!', error ); }
};

export const getNewFileName = (): string => {
  const date = new Date();
  const datePart = `${ date.getFullYear() }${ date.getMonth() + 1 }${ date.getDate() }`;
  const timePart = `${ date.getHours() }${ date.getMinutes() }${ date.getSeconds() }`;

  return `${ datePart }${ timePart }`;
};

export const parseText = ( text: string ): IAnswers[] => {
  const jsonCSV = readString( text ).data as string[][];

  const answers: IAnswers[] = [];
  let fieldNames: string[] = [];
  let answer: IAnswers = {};

  _forEach( jsonCSV, ( fileRow, index ) => {
    if ( index === 0 ) {
      fieldNames = fileRow;

      return;
    }

    _forEach( fileRow, ( cell, ind ) => {
      if ( ind !== 0 ) {
        answer[ fieldNames[ ind ] ] = cell;
      }
    });

    if ( !_isEmpty( answer )) {
      answers.push({ ...answer });
    }
    answer = {};
  });

  return answers;
};
