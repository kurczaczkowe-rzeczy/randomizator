import { ITableBody } from 'components/TableBody';
import { TableHeadProps } from 'components/TableHead';

export interface ITable {
  /** Specify collection of rows data. */
  body: ITableBody[ 'rows' ];
  /** Specify heder cells that described columns */
  head: TableHeadProps[ 'cells' ];
}
