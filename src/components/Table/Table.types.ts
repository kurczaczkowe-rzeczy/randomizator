import { ITableBody } from 'components/TableBody';
import { TableHeadProps } from 'components/TableHead';

export interface ITable {
  body: ITableBody[ 'rows' ];
  head: TableHeadProps[ 'cells' ];
}
