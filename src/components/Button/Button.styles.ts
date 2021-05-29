import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  palette, spacing, shadow,
}) => ({
  root: {
    width: '100%',
    padding: spacing( 1, 0 ),
    backgroundColor: palette.primary.main,
    borderColor: 'transparent',
    color: palette.colorText,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.6s linear',

    '&:focus': {
      outline: 'none',
      boxShadow: shadow.focus,
    },
    '& span': { color: palette.colorText },
  },
  iconButton: {
    padding: spacing(
      0.5625,
      1.5,
      0.5625,
      1,
    ),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { color: palette.colorText },
  moreSpace: { marginRight: spacing( 0.5 ) },
}));
