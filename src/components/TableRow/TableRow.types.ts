import { ITableCell } from 'components/TableCell';
import { StringOrNumber } from 'types';

export interface ITableRow { cells: ( ITableCell & { id: StringOrNumber })[] }
