import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing }) => ({
  root: {
    position: 'absolute',
    bottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  save: {
    width: 'max-content',
    padding: spacing( 1, 1.5 ),
    opacity: 0,
    transition: 'opacity 300ms ease-in-out',
  },
  dirty: { opacity: 1 },
}));
