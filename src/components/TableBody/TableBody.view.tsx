import _map from 'lodash/map';

import MUITableBody from '@material-ui/core/TableBody';

import TableRow from 'components/TableRow';

import { ITableBody } from './TableBody.types';

/**
 * Component groups and display rows.
 */
export const TableBody = ({ rows, onClick }: ITableBody ): JSX.Element => (
  <MUITableBody>
    { _map( rows, ({ cells, id }) => (
      <TableRow
        key={ id }
        cells={ cells }
        onClick={ onClick ? ( event ) => onClick( id, event ) : undefined }
      />
    ))}
  </MUITableBody>
);

export default TableBody;
