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
  const [ currentWidth, setCurrentWidth ] = useState<ITableCell[ 'width' ]>( undefined );
  const styles = useStyles({ width: currentWidth });

  const MUITableCellRef = useRef< Element >( null );

  useEffect(() => {
    if ( MUITableCellRef.current?.tagName === 'TH' ) {
      setCurrentWidth( width );
    }
  }, [ MUITableCellRef, width ]);

  return (
    <MUITableCell
      innerRef={ MUITableCellRef }
      classes={{ root: styles.root }}
    >
      { children }
    </MUITableCell>
  );
};

export default TableCell;
