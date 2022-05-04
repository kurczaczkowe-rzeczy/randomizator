import { readString } from 'react-papaparse';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';

import { AnswerFields } from 'page/Guest';
import { createAnswer, createAnswerField } from 'utils/answersUtils';

import { IAnswerWithId } from './Creator.types';

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
