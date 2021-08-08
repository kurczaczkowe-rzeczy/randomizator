import { MouseEvent } from 'react';

import { ITableCell } from 'components/TableCell';
import { StringOrNumber } from 'types';

export interface ITableRow {
  /** Array of table data contains content and identifier for cell. */
  cells: ( ITableCell & { id: StringOrNumber })[];
  /** Action call on user interaction via mouse click on this element. If not specified row is noninteractive. */
  onClick?: ( event: MouseEvent ) => void;
}
