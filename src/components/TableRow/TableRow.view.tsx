import classNames from 'classnames';
import _map from 'lodash/map';

import MUITableRow from '@material-ui/core/TableRow';

import TableCell from 'components/TableCell';

import { ITableRow } from './TableRow.types';
import useStyles from './TableRow.styles';

/**
 * Component renders cells in table row.
 */
export const TableRow = ({ cells, onClick }: ITableRow ): JSX.Element => {
  const styles = useStyles();

  return (
    <MUITableRow
      classes={{ root: classNames({ [ styles.interactiveRow ]: onClick }) }}
      onClick={ onClick }
    >
      { _map( cells, ({
        children,
        width,
        id,
      }) => <TableCell key={ id } width={ width }>{ children }</TableCell> ) }
    </MUITableRow>
  );
};

export default TableRow;
