import _startsWith from 'lodash/startsWith';
import _toUpper from 'lodash/toUpper';
import _some from 'lodash/some';
import _filter from 'lodash/filter';

export const randomItem = ( array ) => array[ Math.floor( Math.random() * array.length ) ];

export const filterArrayByTag = ( array, tags ) => {
  const someIterate = ( tag, answer ) => _startsWith( _toUpper( answer ), _toUpper( tag ));
  const filterFunc = ( answer ) => _some( tags, ( tag ) => someIterate( tag, answer ));

  return _filter( array, filterFunc );
};
