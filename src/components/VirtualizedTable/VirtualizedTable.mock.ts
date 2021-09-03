import { action } from '@storybook/addon-actions';
import _map from 'lodash/map';

const mockData = {
  rows: _map( Array( 100 ), ( _, id ) => ({
    id, cell1: 'Komórka 1', cell2: 'Komórka2',
  })),
  columns: [
    {
      label: 'Nagłówek 1',
      dataKey: 'cell1',
      columnData: { type: 'text' },
      width: 150,
    },
    {
      label: 'Nagłówek 2',
      dataKey: 'cell2',
      columnData: { type: 'text' },
      width: 150,
      flexGrow: 1,
    },
  ],
  maxRows: 1000,
  onLoadMoreRows: action( 'onLoadMoreRows' ),
};

export const sortData = {
  onSort: action( 'onSort' ),
  sortBy: 'cell1',
};

export default mockData;
