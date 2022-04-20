import _startsWith from 'lodash/startsWith';
import _toUpper from 'lodash/toUpper';
import _some from 'lodash/some';
import _filter from 'lodash/filter';

type RandomItem = < Item >( items: Item[]) => Item;
type FilterByTag = ( array: string[], tags: string[]) => string[];
type IsStartsWith = ( tag: string, answer: string ) => boolean;
type HasTags = ( answer: string ) => boolean;

/** Method randomize index of array and return value of that index. */
export const randomItem: RandomItem = ( array ) => array[ Math.floor( Math.random() * array.length ) ];

/** Method filter array of answer by provided tags. */
export const filterByTag: FilterByTag = ( array, tags ) => {
  const isStartsWith: IsStartsWith = ( tag, answer ) => _startsWith( _toUpper( answer ), _toUpper( tag ));
  const hasTags: HasTags = ( answer ) => _some( tags, ( tag ) => isStartsWith( tag, answer ));

  return _filter( array, hasTags );
};
// ToDo separate randomItem and filterArrayByTag
