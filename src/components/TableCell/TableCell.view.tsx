import { useContext } from 'react';

import MUITableCell from '@material-ui/core/TableCell';
import MUITableLvl2Context from '@material-ui/core/Table/Tablelvl2Context';

import { ITableCell } from './TableCell.types';
import useStyles from './TableCell.styles';

/**
 * Cell element that adapt to context. If cell is in table header it has be a `th` tag
 * otherwise it has be a `td` tag.
 */
export const TableCell = ({
  content,
  width,
}: ITableCell ): JSX.Element => {
  const styles = useStyles();
  const tableLvl2 = useContext( MUITableLvl2Context );

  const isHeadCell = tableLvl2?.variant === 'head';

  return (
    <MUITableCell
      classes={{ root: styles.root }}
      width={ isHeadCell ? width : undefined }
    >
      { content }
    </MUITableCell>
  );
};

export default TableCell;
