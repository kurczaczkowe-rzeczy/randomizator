import { readString } from 'react-papaparse';
import _forEach from 'lodash/forEach';
import _isEmpty from 'lodash/isEmpty';

const parseText = ( text ) => {
  const jsonCSV = readString( text ).data;

  const answers = [];
  let keys = [];
  let result = {};

  _forEach( jsonCSV, ( value, index ) => {
    if ( !index ) {
      keys = value;

      return;
    }

    _forEach( value, ( val, ind ) => {
      if ( ind !== 0 ) {
        result[ keys[ ind ] ] = val;
      }
    });

    if ( !_isEmpty( result )) {
      answers.push({ ...result });
    }
    result = {};
  });

  return answers;
};

export default parseText;
