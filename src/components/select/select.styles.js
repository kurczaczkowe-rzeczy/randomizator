import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  label: { color: '#bdaeae' },
  labelFocus: { background: 'transparent' },
  select: {
    '&:focus': {
      color: '#771e76',
      background: 'none',
    },
  },
  paper: {
    background: '#1b1b1b',
    color: '#bdaeae',
  },
  item: {},
}));
