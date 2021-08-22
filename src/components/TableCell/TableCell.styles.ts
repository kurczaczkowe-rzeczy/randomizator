import { CSSProperties } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface IStyleProps {
  width?: CSSProperties[ 'width' ];
}

export default makeStyles<Theme, IStyleProps>(({ palette, spacing }) => ({
  root: {
    color: palette.colorTextSelected,
    borderBottom: 'none',
    width: ({ width }) => width,
    padding: spacing( 1 ),
  },
}));
