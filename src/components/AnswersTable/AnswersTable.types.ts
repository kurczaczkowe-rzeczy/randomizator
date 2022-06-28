import { IAnswerListener } from 'components/AnswerListener';
import { IVirtualizedTable } from 'components/VirtualizedTable';
import { IBaseAnswer } from 'types';

/** An object describe structure of row element. */
export interface IAnswerRow extends IBaseAnswer {
  /** Answer edit state that allows control of weight input in row. */
  edit: boolean;
}

/** An object represent properties used to render virtualized table. */
export interface IAnswersTable {
  /**
   * This method run on scroll table and load answers until reach max row limits for Virtualized table
   * or index will point to last element in database.
   */
  onLoadMoreRows: IVirtualizedTable< IAnswerRow >[ 'onLoadMoreRows' ];
  /** This method update */
  onWeightUpdate: IAnswerListener[ 'onWeightUpdate' ];
  /** This value specify list of answers. */
  rows: IAnswerRow[];
  /**
   * This value trigger reset whole form to avoid remember fo example data from last selected form. If not specified
   * it defaults to ***false***.
   */
  shouldReset?: boolean;
}
/** An object represent connection between tab and rendered table. */
export interface IAnswerTableContainer {
  /**
   * This value specify name of tab associated with answer table. Based on this value container recognize which answer
   * field should be fetched.
   */
  tab: string;
}
