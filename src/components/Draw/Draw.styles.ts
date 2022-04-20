import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  palette,
  gradient,
  borders,
  spacing,
  fonts,
}) => ({
  alignCenterRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    margin: spacing(
      0,
      1.875,
      0,
      0,
    ),
    fontSize: '1.2em',
    minWidth: 'max-content',
    '& span': { color: palette.error.main },
  },
  input: {
    backgroundColor: palette.backgroundLight,
    borderLeft: borders.input,
    borderRight: borders.input,
    borderImage: gradient.input,
    borderBottom: borders.input,
    padding: spacing( 0, 1 ),
    color: palette.colorText,
    fontSize: fonts.size.base,
    minWidth: '60%',
    maxWidth: '60%',
  },
  error: {
    color: palette.error.main,
    marginTop: 0,
  },
  smallWidthInCenter: {
    width: '60%',
    margin: '0 auto',
  },
}));
