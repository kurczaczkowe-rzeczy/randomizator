import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  palette,
  spacing,
  borders,
}) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    position: 'relative',
    width: 840,
    maxHeight: '56vh',
    minHeight: 350,
    borderRadius: 8,
    backgroundColor: palette.backgroundLight,
    color: palette.colorText,
    padding: spacing( 3 ),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    top: -125,
    width: 125,
    height: 125,
  },
  titleWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  withIcon: { top: '4vh' },
  title: {
    fontSize: '1.75em',
    fontWeight: 700,
    lineHeight: '24px',
    marginTop: spacing( 2 ),
  },
  separator: {
    marginTop: spacing( 2 ),
    border: borders.separator,
  },
  bodyWrapper: {
    width: '100%',
    overflow: 'auto',
    paddingRight: spacing( 3 ),
    paddingLeft: spacing( 3 ),
    boxSizing: 'content-box',
  },
}));
