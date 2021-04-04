import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  spacing, palette, shadow,
}) => ({
  card: {
    backgroundColor: palette.backgroundLight,
    borderRadius: 4,
    minWidth: '50%',
    padding: spacing( 2.5, 4.5 ),
    color: palette.colorText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: shadow.card,

    '& h3': { textAlign: 'center' },
  },
}));
