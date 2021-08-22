import { action } from '@storybook/addon-actions';
import _map from 'lodash/map';

const mockData = {
  rows: _map( Array( 600 ), ( _, id ) => ({
    id, cell1: 'Komórka 1', cell2: 'Komórka2',
  })),
  columns: [
    {
      label: 'Nagłówek 1',
      dataKey: 'cell1',
      width: 150,
    },
    {
      label: 'Nagłówek 2',
      dataKey: 'cell2',
      width: 150,
      flexGrow: 1,
    },
  ],
};

export const sortData = {
  onSort: action( 'onSort' ),
  sortBy: 'cell1',
};

export default mockData;
