import { action } from '@storybook/addon-actions';
import _times from 'lodash/times';

const mockData = {
  rows: _times( 100, ( id ) => ({
    id,
    cell1: 'Komórka 1',
    cell2: 'Komórka 2 Komórka 2 Komórka 2 Komórka 2',
    cell3: 'Komórka 3 Komórka 3 Komórka 3 Komórka 3 Komórka 3 Komórka 3',
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
      width: 350,
    },
    {
      label: 'Nagłówek 3',
      dataKey: 'cell3',
      columnData: { type: 'text' },
      width: 200,
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
