import {
  useEffect,
  useRef,
  useState,
} from 'react';

import MUITableCell from '@material-ui/core/TableCell';

import { ITableCell } from './TableCell.types';
import useStyles from './TableCell.styles';

/**
 * Cell element that adapt to context. If cell is in table header it has be a `th` tag
 * otherwise it has be a `td` tag.
 */
export const TableCell = ({
  children,
  width,
}: ITableCell ): JSX.Element => {
  const styles = useStyles();
  const MUITableCellRef = useRef< Element >( null );

  const [ currentWidth, setCurrentWidth ] = useState<ITableCell[ 'width' ]>( undefined );

  useEffect(() => {
    if ( MUITableCellRef.current?.tagName === 'TH' ) {
      setCurrentWidth( width );
    }
  }, [ MUITableCellRef, width ]);

  return (
    <MUITableCell
      innerRef={ MUITableCellRef }
      classes={{ root: styles.root }}
      width={ currentWidth }
    >
      { children }
    </MUITableCell>
  );
};

export default TableCell;
