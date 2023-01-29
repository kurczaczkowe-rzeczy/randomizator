import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  palette,
  spacing,
  shadow,
}) => ({
  root: {
    width: '100%',
    padding: spacing( 1, 0 ),
    borderColor: 'transparent',
    color: palette.colorText,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.6s linear',
    '@media (max-width: 640px)': { fontSize: 12 },
  },
  containedButton: {
    backgroundColor: palette.primary.main,

    '&:focus': {
      outline: 'none',
      boxShadow: shadow.focus,
    },
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
  moreSpace: { marginRight: spacing( 0.5 ) },
  textButton: {
    background: 'none',
    color: palette.primary.main,

    '&:hover': { color: palette.primary.light },
  },
}));
