import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  screen: {
    position: 'absolute',
    backgroundColor: palette.backgroundDark,
    zIndex: 1000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  loadingScreen: { fontSize: 60 },
}));

