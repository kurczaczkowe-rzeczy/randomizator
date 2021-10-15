import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette, spacing }) => ({
  weight: {
    display: 'inline-block',
    color: palette.colorText,
    textAlign: 'right',
    width: '100%',
    margin: 0,
    padding: spacing( 1.25 ),
    fontSize: '17px',
    lineHeight: '21px',
    fontFamily: 'Montserrat',
  },
}));
