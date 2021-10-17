import { IAnswer } from 'hooks/types';
import {
  CSSProperties,
  ReactNode,
  ReactNodeArray,
} from 'react';

/**
 * Object represents row parameters for answer manager. It extends **IAnswer** to provide answer index
 * that is used to correctly specify row.
 */
export interface IAnswersWeightRow extends IAnswer {
  /** This value specify CSS class name provide to row. */
  className: string;
  /** This value specify collection of ReactNodes. Collection length is always equal to amount of  */
  columns: ReactNodeArray;
  /** This value specify typically styles provide from virtualized table. It can be also custom styles. */
  style: CSSProperties;
}

/** Alias for cell getter method that gets element and based on indexes return associated with them value. */
export type AnswerWeightRowCellGetter< ElementType extends ReactNode = ReactNode > = (
  element: ElementType,
  answerIndex: IAnswer[ 'answerIndex' ],
  cellIndex?: number,
) => ReactNode;
