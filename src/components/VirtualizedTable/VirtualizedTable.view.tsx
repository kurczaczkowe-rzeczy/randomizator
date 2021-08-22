import { useState } from 'react';
import {
  Table,
  Column,
  AutoSizer,
  Index,
  SortDirection,
  TableHeaderRenderer,
  TableCellRenderer,
} from 'react-virtualized';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isUndefined from 'lodash/isUndefined';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import TableCell from 'components/TableCell';
import { ROW_HEIGHT, ROW_OFFSET } from 'constans';

import useStyle from './VirtualizedTable.styles';
import { IVirtualizedTable, Sort } from './VirtualizedTable.types';

/**
 * Component render virtualized table.
 *
 * If width/height/both are 0 make sure that parent or one of his parent has set value.
 */
export const VirtualizedTable = ({
  rows,
  columns,
  onSort = undefined,
  sortBy,
  sortDirection = SortDirection.ASC,
  overscanRowCount = 10,
}: IVirtualizedTable ): JSX.Element => {
  const styles = useStyle();
  const disableSort = !onSort;
  const [ currentSortDirection, setCurrentSortDirection ] = useState( disableSort ? undefined : sortDirection );
  const [ currentSortBy, setCurrentSortBy ] = useState( disableSort ? undefined : sortBy );

  const getRowClassNames = ({ index }: Index ): string => index > -1
    ? classNames( styles.row, styles.flexContainer )
    : classNames( styles.headerRow, styles.flexContainer );

  const headerCellRenderer: TableHeaderRenderer = ({
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
  const cellRenderer: TableCellRenderer = ({ cellData }) => (
    <TableCell component="div">{cellData}</TableCell>
  );

  const sort: Sort = ( params ) => {
    if ( _isUndefined( onSort )) {
      return undefined;
    }

    setCurrentSortBy( params.sortBy );
    setCurrentSortDirection( params.sortDirection );
    onSort( params );
  };

  const headerClassName = classNames(
    styles.flexContainer,
    styles.headerCell,
    { [ styles.noninteractive ]: disableSort },
  );

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          width={ width }
          height={ height }
          headerHeight={ ROW_HEIGHT }
          headerClassName={ headerClassName }
          rowCount={ rows.length }
          rowGetter={ ({ index }) => rows[ index ] }
          rowHeight={ ROW_HEIGHT + ROW_OFFSET }
          rowClassName={ getRowClassNames }
          overscanRowCount={ overscanRowCount }
          sort={ sort }
          sortBy={ currentSortBy }
          sortDirection={ currentSortDirection }
        >
          { _map( columns, ( column ) => (
            <Column
              key={ column.dataKey }
              disableSort={ disableSort }
              headerRenderer={ headerCellRenderer }
              cellRenderer={ cellRenderer }
              { ...column }
            />
          )) }
        </Table>
      )}
    </AutoSizer>
  );
};

export default VirtualizedTable;
