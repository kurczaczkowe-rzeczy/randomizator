import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  spacing, palette, shadow,
}) => ({
  card: {
    backgroundColor: palette.backgroundLight,
    borderRadius: 4,
    width: '100%',
    padding: spacing( 2.5, 4.5 ),
    color: palette.colorText,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: shadow.card,

    '& h3': { textAlign: 'center' },
  },
  center: { alignItems: 'center' },
  bodyWrapper: { width: '100%' },
}));
