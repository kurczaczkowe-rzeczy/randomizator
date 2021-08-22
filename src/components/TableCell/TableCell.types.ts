import {
  CSSProperties,
  ReactNode,
  ElementType,
} from 'react';

import { TableCellBaseProps } from '@material-ui/core/TableCell/TableCell';

export interface ITableCell {
  /** Element that was display to user */
  children: ReactNode;
  /** Specify component used for the root node. Either a string to use a HTML element or a component. */
  component?: ElementType<TableCellBaseProps>;
  /** Specify width of column. It could be set only for header cells. */
  width?: CSSProperties[ 'width' ];
}
