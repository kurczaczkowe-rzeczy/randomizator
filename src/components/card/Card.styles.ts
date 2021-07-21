import makeStyles from '@material-ui/core/styles/makeStyles';

import { LOADER_SIZE } from 'constans';

export default makeStyles(({
  spacing,
  palette,
  shadow,
  classes,
}) => ({
  card: {
    backgroundColor: palette.backgroundLight,
    borderRadius: 4,
    width: '100%',
    padding: spacing( 2.5, 4.5 ),
    color: palette.colorText,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: shadow.card,
    position: 'relative',

    '& h3': { textAlign: 'center' },
  },
  center: { alignItems: 'center' },
  bodyWrapper: { width: '100%' },
  loadingRoot: { fontSize: LOADER_SIZE },
  loaderWrapper: {
    position: 'absolute',
    backgroundColor: palette.fadedBackgroundDark(),
    borderRadius: spacing( 0.5 ),
    ...classes.centerWithFillParent,
  },
}));
