import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  root: {
    color: palette.primary.main,
    cursor: 'pointer',
    transition: 'transform 300ms ease-in-out',
    transform: 'rotate(90deg)',
  },
  edit: { transform: 'rotate(0deg)' },
}));
