import makeStyles from '@material-ui/core/styles/makeStyles';

import { LOADER_SIZE } from 'constans';

export default makeStyles(({ palette, classes }) => ({
  screen: {
    position: 'fixed',
    backgroundColor: palette.backgroundDark,
    height: '100vh',
    ...classes.centerWithFillParent,
  },
  loadingScreen: { fontSize: LOADER_SIZE },
}));

