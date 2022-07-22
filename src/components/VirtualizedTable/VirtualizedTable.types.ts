import {
  ColumnProps,
  Index,
  IndexRange,
  SortDirectionType,
  TableRowRenderer,
} from 'react-virtualized';

import { ClassNameMap } from '@material-ui/styles/withStyles';

import { Mapping, StringOrNumber } from 'types';

export type Sort = ( params: { sortBy: string; sortDirection: SortDirectionType }) => void;

/** An object describe mocked row in story. */
export interface IMockedRow extends Mapping< unknown >{
  cell1: StringOrNumber;
  cell2: StringOrNumber;
  cell3: StringOrNumber;
  id: StringOrNumber;
}
/** An object describe mocked table in story. */
export type MockTable = IVirtualizedTable< IMockedRow >;

export interface IVirtualizedTable< RowType > {
  /** Array of objects with header cells and cells contents. */
  columns: ColumnProps[];
  /** Specify maximum numbers of rows that will be loaded. It should be the maximum length of collection
   * stored in database. */
  maxRows: number;
  /** Callback invoked when more rows must be loaded. */
  onLoadMoreRows: ( params: IndexRange ) => Promise<unknown>;
  /** Callback invoked if user click on sortable header. */
  onSort?: Sort;
  /** Specify how much rows was render above/below visible rows. It uses to reduce flickering during scrolling. */
  overscanRowCount?: number;
  /** Methods render row component. */
  rowRenderer?: TableRowRenderer;
  /** Arrays of objects with cell data. */
  rows: RowType[];
  /** Specify what currently column is sorted by. */
  sortBy?: string;
  /** Specify sort direction. */
  sortDirection?: SortDirectionType;
}

export type WithStyles< ReturnType > = ( styles: ClassNameMap ) => ReturnType;
export type GetRowClassNames = ({ index }: Index ) => string;
export type VitrualizedTableComp = < RowType >( props: IVirtualizedTable< RowType > ) => JSX.Element;
