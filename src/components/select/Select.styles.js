import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(( theme ) => ({
  label: {
    color: theme.palette.colorText,
    fontSize: theme.fonts.size.label,
    '&.Mui-focused': { color: theme.palette.colorText },
  },

  labelFocus: {
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
  },

  menuItemSelected: { background: theme.palette.primary },

  icon: { fill: theme.palette.primary },

  selected: {
    color: theme.palette.colorTextSelected,
    paddingTop: theme.spacing( 1.5 ),
  },
}));
