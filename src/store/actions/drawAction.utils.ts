import _startsWith from 'lodash/startsWith';
import _toUpper from 'lodash/toUpper';
import _some from 'lodash/some';
import _filter from 'lodash/filter';
import _sumBy from 'lodash/sumBy';
import _random from 'lodash/random';
import _isEmpty from 'lodash/isEmpty';

import { RandomizedAnswer, RandomizedAnswers } from 'types';

/** Methods predicate if answer contain tag. */
const isStartsWith = ( answer: RandomizedAnswer ) =>
  ( tag: string ) => _startsWith( _toUpper( answer.value ), _toUpper( tag ));

/** Methods iterate through every tag and run predicate method to check if answer contain tag. */
const hasTags = ( tags: string[]) => ( answer: RandomizedAnswer ) => _some( tags, isStartsWith( answer ));

/** Method randomize index of array and return value of that index. */
export const randomItem = ( array: RandomizedAnswers ): string => {
  if ( _isEmpty( array )) { return ''; }

  const weightsSum = _sumBy( array, ({ weight }) => weight );
  let randomNumber = _random( 0, weightsSum );
  let index = -1;

  do {
    index++;
    randomNumber -= array[ index ].weight;
  } while ( randomNumber > 0 );

  return array[ index ].value;
};

/** Method filter array of answer by provided tags. */
export const filterByTag = ( array: RandomizedAnswers, tags: string[]): RandomizedAnswers =>
  _filter( array, hasTags( tags ));
// ToDo separate randomItem and filterArrayByTag
