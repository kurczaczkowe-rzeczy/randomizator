import { readString } from 'react-papaparse';
import firebase from 'firebase';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';
import _reduce from 'lodash/reduce';
import _map from 'lodash/map';

import { db } from 'config/firebaseConfig';

import { AnswerFields } from 'page/Guest';
import { Mapping } from 'types';
import { createAnswer, createAnswerField } from 'utils/answersUtils';

import { Answers, IAnswerWithId } from './Creator.types';

export const getFormCollection = async ( userID: string, formID: string ):
  Promise<firebase.firestore.DocumentData | undefined> => {
  try {
    const getFormData = await db.collection( userID ).doc( formID )
      .get();

    return await getFormData.data();
  } catch ( error: unknown ) { console.error( 'Error!', error ); }
};

export const getNewFileName = (): string => {
  const date = new Date();
  const datePart = `${ date.getFullYear() }${ date.getMonth() + 1 }${ date.getDate() }`;
  const timePart = `${ date.getHours() }${ date.getMinutes() }${ date.getSeconds() }`;

  return `${ datePart }${ timePart }`;
};

export const parseText = ( text: string ): IAnswerWithId[] => {
  const jsonCSV = readString( text ).data as string[][];

  const answers: IAnswerWithId[] = [];
  let fieldNames: string[] = [];
  let answerFields: AnswerFields = [];

  _forEach( jsonCSV, ( fileRow, index ) => {
    if ( index === 0 ) {
      fieldNames = fileRow;

      return;
    }

    _forEach( fileRow, ( cell, ind ) => {
      if ( ind !== 0 ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        answerFields.push( createAnswerField( cell, fieldNames[ ind ]));
      }
    });

    if ( !_isEmpty( answerFields )) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      answers.push( createAnswer( answerFields ));
    }
    answerFields = [];
  });

  return answers;
};

/** Methods create from array of {@link IAnswerField} map with field name as a key and value. */
export const reduceFieldsToObject = ( fields: AnswerFields ): Mapping< string | number > => _reduce(
  fields,
  ( result, { fieldName, value }) => ({ ...result, [ fieldName ]: value }),
  {},
);

/** Methods create from answers collection array of filed names and value pairs. */
export const mapAnswers = ( answers: Answers = []): Mapping< string | number >[] => _map( answers,
  ({ fields }) => reduceFieldsToObject( fields ));
