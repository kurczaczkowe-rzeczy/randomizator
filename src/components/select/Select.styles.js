import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(( theme ) => ({
  label: {
    color: theme.palette.colorText,
    fontSize: theme.fonts.size.label,
    '&.Mui-focused': { color: theme.palette.colorText },
  },

  list: { padding: 0 },

  select: {
    backgroundColor: theme.palette.backgroundLight,
    borderLeft: theme.borders.input,
    borderRight: theme.borders.input,
    borderImage: theme.palette.gradient.input,
    borderBottom: theme.borders.input,
    padding: theme.spacing( 1 ),
    color: theme.palette.colorText,
    fontSize: theme.fonts.size.base,
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
    borderBottom: `1px solid ${ theme.palette.primary.main }`,
    padding: theme.spacing( 1, 2 ),
    '&:last-of-type': { border: 'none' },
  },

  menuItemSelected: { background: theme.palette.primary.main },

  icon: {
    fill: theme.palette.primary.main,
    paddingRight: theme.spacing( 1 ),
    paddingLeft: theme.spacing( 1 ),
  },

  selected: {
    color: theme.palette.colorTextSelected,
    paddingTop: theme.spacing( 1.5 ),
  },
}));
