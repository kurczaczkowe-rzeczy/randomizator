import { readString } from 'react-papaparse';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';

const parseText = ( text ) => {
  const jsonCSV = readString( text ).data;

  const answers = [];
  let fieldNames = [];
  let answer = {};

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

export default parseText;
