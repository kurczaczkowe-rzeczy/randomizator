import { MouseEvent } from 'react';

import { ITableRow } from 'components/TableRow';
import { StringOrNumber } from 'types';

export interface ITableBody {
  /** Method allows user call action on click row */
  onClick?: ( id: StringOrNumber, event: MouseEvent ) => void;
  /** Collection of cells */
  rows: ( Omit<ITableRow, 'onClick'> & { id: StringOrNumber })[];
}
