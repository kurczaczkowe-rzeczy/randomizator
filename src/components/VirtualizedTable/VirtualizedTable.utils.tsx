import {
  SortDirection,
  TableCellRenderer,
  TableHeaderRenderer,
} from 'react-virtualized';
import classNames from 'classnames';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import TableCell from 'components/TableCell';

import { GetRowClassNames, WithStyles } from './VirtualizedTable.types';

export const cellRenderer: TableCellRenderer = ({ cellData }) => (
  <TableCell component="div">{cellData}</TableCell>
);

export const getRowClassNames: WithStyles< GetRowClassNames > = ( styles ) => ({ index }) => index > -1
  ? classNames( styles.row, styles.flexContainer )
  : classNames( styles.headerRow, styles.flexContainer );

/* eslint-disable react/prop-types */
export const headerCellRenderer: WithStyles< TableHeaderRenderer > = ( styles ) => ({
  label,
  dataKey,
  sortBy,
  sortDirection,
  disableSort,
}) => (
  <TableCell component="div">
    <span>{ label }</span>
    { !disableSort && sortBy === dataKey && (
      <KeyboardArrowUpIcon
        classes={{
          root: classNames( styles.arrow,
            { [ styles.rotateArrow ]: sortDirection === SortDirection.DESC }),
        }}
      />
    ) }
  </TableCell>
);
/* eslint-enable react/prop-types */
