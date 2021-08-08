import { CSSProperties, ReactNode } from 'react';

export interface ITableCell {
  /** Element that was display to user */
  children: ReactNode;
  /** Specify width of column. It could be set only for header cells. */
  width?: CSSProperties[ 'width' ];
}
