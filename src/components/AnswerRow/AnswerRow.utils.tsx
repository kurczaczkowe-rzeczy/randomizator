import {
  cloneElement,
  Children,
  ReactElement,
  ReactNodeArray,
  ReactNode,
} from 'react';
import _isNil from 'lodash/isNil';
import _isArray from 'lodash/isArray';

import AnswerEditController from 'components/AnswerEditController';
import AnswerWeightController from 'components/AnswerWeightController';
import AnswerContentController from 'components/AnswerContentController';

import { AnswerRowCellGetter } from './AnswerRow.types';

/**
 * Methods get cell index and based on them display content for specific cell.
 *
 * @param element the element that will be display if cell index is equal to 0,
 * @param answerIndex value specify answer index in field array,
 * @param cellIndex based on this value display proper content for cell.
 * @return content of cell or null if cell index was not specified or cell index was not handled
 */
const getCellContent: AnswerRowCellGetter = (
  element,
  answerIndex,
  cellIndex,
) => {
  switch ( cellIndex ) {
    case 0: { return <AnswerContentController answer={ element } answerIndex={ answerIndex } />; }
    case 1: { return <AnswerWeightController answerIndex={ answerIndex } />; }
    case 2: { return <AnswerEditController answerIndex={ answerIndex } />; }
    default: { return null; }
  }
};

/**
 * Methods check type of element and based on this typ do different operation. If element is:
 * - null or undefined it simply return null,
 * - primitive such as number, boolean or string it will return content for cell,
 * - react component it will clone element and call recursive this method to get content of cell,
 * - array it will map through whole array and call recursive this method to get content of cell.
 *
 * @param element on this value specify which operation should be done,
 * @param answerIndex value specify answer index in field array,
 * @param cellIndex current encounter cell index.
 * @return cloned element from parent or cell content
 */
export const getCells: AnswerRowCellGetter< ReactNodeArray | ReactNode > = (
  element,
  answerIndex,
  cellIndex = -1,
) => {
  if ( _isNil( element )) { return null; }

  if (
    typeof element == 'string' ||
    typeof element == 'number' ||
    typeof element == 'boolean'
  ) {
    return getCellContent(
      element,
      answerIndex,
      cellIndex,
    );
  }

  if (( 'props' in element )) {
    return cloneElement(
      element as ReactElement,
      {},
      getCells(
        element.props.children,
        answerIndex,
        cellIndex,
      ),
    );
  }

  if ( _isArray( element )) {
    return Children.map( element,
      ( child, index ) => getCells(
        child,
        answerIndex,
        index,
      ));
  }

  throw new Error( `Not supported type of element: ${ element }` );
};
