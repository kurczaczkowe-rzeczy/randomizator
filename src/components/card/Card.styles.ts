import makeStyles from '@material-ui/core/styles/makeStyles';

import { LOADER_SIZE } from 'constans';

export default makeStyles(({
  spacing,
  palette,
  shadow,
  classes,
}) => ({
  root: {
    borderRadius: 4,
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: palette.colorText,

    '& h3': { textAlign: 'center' },
  },
  card: {
    backgroundColor: palette.backgroundLight,
    padding: spacing( 2.5, 4.5 ),
    boxShadow: shadow.card,
  },
  center: { alignItems: 'center' },
  fullWidth: { width: '100%' },
  loadingRoot: { fontSize: LOADER_SIZE },
  loaderWrapper: {
    position: 'absolute',
    backgroundColor: palette.fadedBackgroundDark(),
    borderRadius: spacing( 0.5 ),
    ...classes.centerWithFillParent,
    zIndex: 999,
  },
}));
