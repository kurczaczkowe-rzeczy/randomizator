import _map from 'lodash/map';

import MUITableRow from '@material-ui/core/TableRow';

import TableCell from 'components/TableCell';

import { ITableRow } from './TableRow.types';

/**
 * Component renders cells in table row.
 */
export const TableRow = ({ cells }: ITableRow ): JSX.Element => (
  <MUITableRow>
    { _map( cells, ({
      children,
      width,
      id,
    }) => <TableCell key={ id } width={ width }>{ children }</TableCell> ) }
  </MUITableRow>
);

export default TableRow;
