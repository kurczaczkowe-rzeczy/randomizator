import { MouseEvent } from 'react';

import { ITableRow } from 'components/TableRow';
import { StringOrNumber } from 'types';

export interface ITableBody {
  onClick?: ( id: StringOrNumber, event: MouseEvent ) => void;
  rows: ( Omit<ITableRow, 'onClick'> & { id: StringOrNumber })[];
}
