/* eslint-disable func-style, react/function-component-definition */
import { useState } from 'react';
import {
  Table,
  Column,
  AutoSizer,
  InfiniteLoader,
  SortDirection,
} from 'react-virtualized';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isUndefined from 'lodash/isUndefined';

import { ROW_HEIGHT, ROW_OFFSET } from 'constans';

import useStyle from './VirtualizedTable.styles';
import { IVirtualizedTable, Sort } from './VirtualizedTable.types';
import {
  cellRenderer,
  getRowClassNames,
  headerCellRenderer,
} from './VirtualizedTable.utils';

/**
 * Component render virtualized table.
 *
 * If width/height/both are 0 make sure that parent or one of his parent has set value.
 */
export function VirtualizedTable<RowTypes>({
  rows,
  maxRows,
  columns,
  onSort = undefined,
  sortBy,
  sortDirection = SortDirection.ASC,
  overscanRowCount = 10,
  onLoadMoreRows,
  rowRenderer = undefined,
}: IVirtualizedTable< RowTypes > ): JSX.Element {
  const styles = useStyle();
  const disableSort = !onSort;
  const [ currentSortDirection, setCurrentSortDirection ] = useState( disableSort ? undefined : sortDirection );
  const [ currentSortBy, setCurrentSortBy ] = useState( disableSort ? undefined : sortBy );

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
    <InfiniteLoader
      isRowLoaded={ ({ index }) => !!rows[ index ] }
      loadMoreRows={ onLoadMoreRows }
      rowCount={ maxRows }
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ width, height }) => (
            <Table
              ref={ registerChild }
              width={ width }
              height={ height }
              headerHeight={ ROW_HEIGHT }
              headerClassName={ headerClassName }
              rowCount={ rows.length }
              rowGetter={ ({ index }) => rows[ index ] }
              rowHeight={ ROW_HEIGHT + ROW_OFFSET }
              rowClassName={ getRowClassNames( styles ) }
              rowRenderer={ rowRenderer }
              onRowsRendered={ onRowsRendered }
              overscanRowCount={ overscanRowCount }
              sort={ sort }
              sortBy={ currentSortBy }
              sortDirection={ currentSortDirection }
            >
              { _map( columns, ( column ) => (
                <Column
                  key={ column.dataKey }
                  disableSort={ disableSort }
                  headerRenderer={ headerCellRenderer( styles ) }
                  cellRenderer={ cellRenderer }
                  { ...column }
                />
              )) }
            </Table>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
}

export default VirtualizedTable;
