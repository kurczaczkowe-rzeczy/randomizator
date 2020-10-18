import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(( theme ) => ({
  label: {
    color: theme.palette.colorText,
    fontSize: theme.fonts.size.label,
    '&.Mui-focused': { color: theme.palette.colorText },
  },

  list: { padding: 0 },

  select: {
    backgroundColor: '#222222',
    borderLeft: '2px solid',
    borderRight: '2px solid',
    borderImage: 'linear-gradient(180deg, #222 0%, #222 49%, #771e76 50%, #771e76 100%) 1',
    borderBottom: '2px solid',
    padding: '8px',
    color: '#bdaeae',
    fontSize: '17px',
    '&:focus':
      {
        background: 'transparent',
        color: theme.palette.colorText,
      },
  },

  paper: {
    background: theme.palette.backgroundDark,
    color: theme.palette.colorText,
  },

  menuItem: {
    borderBottom: `1px solid ${ theme.palette.primary }`,
    padding: theme.spacing( 1, 2 ),
    '&:last-of-type': { border: 'none' },
  },

  menuItemSelected: { background: theme.palette.primary },

  icon: {
    fill: theme.palette.primary,
    paddingRight: 8,
    paddingLeft: 8,
  },

  selected: {
    color: theme.palette.colorTextSelected,
    paddingTop: theme.spacing( 1.5 ),
  },
}));
