import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  palette,
  borders,
  fonts,
  gradient,
  spacing,
}: Theme ) => ({
  label: {
    color: palette.colorText,
    fontSize: fonts.size.label,
    paddingLeft: spacing( 1 ),
    '&.Mui-focused': { color: palette.colorText },
  },

  list: { padding: 0 },

  select: {
    borderLeft: borders.input,
    borderRight: borders.input,
    borderImage: gradient.input,
    borderBottom: borders.input,
    padding: spacing( 1 ),
    color: palette.colorText,
    fontSize: fonts.size.base,
    '&:focus':
      {
        background: 'transparent',
        color: palette.colorText,
      },
  },

  paper: {
    background: palette.backgroundDark,
    color: palette.colorText,
    borderRadius: 0,
  },

  menuItem: {
    borderBottom: `1px solid ${ palette.primary.main }`,
    padding: spacing( 1, 2 ),
    '&:last-of-type': { border: 'none' },
    '&.Mui-selected': { background: palette.primary.main },
    '&.Mui-selected:hover, &:hover': { background: palette.primary.light },
  },

  icon: {
    fill: palette.primary.main,
    paddingRight: spacing( 1 ),
    paddingLeft: spacing( 1 ),
  },

  selected: {
    color: palette.colorTextSelected,
    paddingTop: spacing( 1.5 ),
  },
}));
