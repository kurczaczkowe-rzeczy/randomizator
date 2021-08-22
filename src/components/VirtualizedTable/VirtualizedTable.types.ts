import {
  ColumnProps,
  SortDirectionType,
} from 'react-virtualized';

import { Mapping, StringOrNumber } from 'types';

export type Sort = ( params: { sortBy: string; sortDirection: SortDirectionType }) => void;

export interface IVirtualizedTable {
  /** Array of objects with header cells and cells contents. */
  columns: ColumnProps[];
  /** Function call if user click on sortable header. */
  onSort?: Sort;
  /** Specify how much rows was render above/below visible rows. It uses to reduce flickering during scrolling. */
  overscanRowCount?: number;
  /** Arrays of objects with cell data. */
  rows: ({ id: StringOrNumber } & Mapping< unknown > )[];
  /** Specify what currently column is sorted by. */
  sortBy?: string;
  /** Specify sort direction. */
  sortDirection?: SortDirectionType;
}
