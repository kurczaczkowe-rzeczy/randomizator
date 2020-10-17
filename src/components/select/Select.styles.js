import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  label: {
    color: '#bdaeae',
    fontSize: '19px',
    '&.Mui-focused': { color: '#bdaeae' },
  },

  labelFocus: {
    '&:focus':
      {
        background: 'transparent',
        color: '#bdaeae',
      },
  },

  paper: {
    background: '#1b1b1b',
    color: '#bdaeae',
  },

  menuItem: {
    borderBottom: '1px solid #771e76',
    padding: '8px 16px',
  },

  menuItemSelected: { background: '#771e76' },

  icon: { fill: '#771e76' },

  selected: {
    color: '#fff',
    paddingTop: '12px',
  },
}));
