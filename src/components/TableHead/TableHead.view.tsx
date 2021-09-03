import MUITableHead from '@material-ui/core/TableHead';
import TableRow from 'components/TableRow';

import useStyle from './TableHead.styles';
import { TableHeadProps } from './TableHead.types';

/**
 * Component group header cells in row.
 */
export const TableHead = ( props: TableHeadProps ): JSX.Element => {
  const styles = useStyle();

  return (
    <MUITableHead classes={{ root: styles.root }}>
      <TableRow { ...props } />
    </MUITableHead>
  );
};

export default TableHead;
