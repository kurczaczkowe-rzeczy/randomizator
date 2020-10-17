import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
  label: {
    color: '#bdaeae',
    fontSize: '19px',
    '&.Mui-focused': { color: '#bdaeae' },
  },

  list: { padding: 0 },

  select: {
    '&:focus':
      {
        background: 'transparent',
        color: '#bdaeae',
      },
    backgroundColor: '#222222',
    borderLeft: '2px solid',
    borderRight: '2px solid',
    borderImage: 'linear-gradient(180deg, #222 0%, #222 49%, #771e76 50%, #771e76 100%) 1',
    borderBottom: '2px solid',
    padding: '8px',
    color: '#bdaeae',
    fontSize: '17px',
  },

  paper: {
    background: '#1b1b1b',
    color: '#bdaeae',
  },

  menuItem: {
    borderBottom: '1px solid #771e76',
    padding: '8px 16px',
    '&:last-of-type': { border: 'none' },
  },

  menuItemSelected: { background: '#771e76' },

  icon: {
    fill: '#771e76',
    paddingRight: 8,
    paddingLeft: 8,
  },

  selected: {
    color: '#fff',
    paddingTop: '12px',
  },
}));
