import MUITable from '@material-ui/core/Table';
import MUITableContainer from '@material-ui/core/TableContainer';

import TableBody from 'components/TableBody';
import TableHead from 'components/TableHead';

import useStyle from './Table.styles';
import { ITable } from './Table.types';

/**
 * Component display sets of data.
 */
export const Table = ({ head, body }: ITable ): JSX.Element => {
  const styles = useStyle();

  return (
    <MUITableContainer classes={{ root: styles.root }}>
      <MUITable>
        <TableHead cells={ head } />
        <TableBody rows={ body } />
      </MUITable>
    </MUITableContainer>
  );
};

export default Table;
