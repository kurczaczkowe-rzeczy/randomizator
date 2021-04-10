import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  loadingScreen: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 60,
  },
  screen: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundColor: palette.backgroundDark,
    zIndex: 1000,
  },
}));

