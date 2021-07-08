import makeStyles from '@material-ui/core/styles/makeStyles';

const PAGE_PADDING_TOP = 48;

export default makeStyles(({ spacing, palette }) => ({
  root: {
    height: `calc(100vh - ${ PAGE_PADDING_TOP }px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& form': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',

      '& input, & button': {
        width: '100%',
        marginBottom: spacing( 4.375 ),
        boxSizing: 'border-box',
      },
    },
  },
  card: {
    width: '60%',

    '& > div': { width: '50%' },
  },
  error: {
    backgroundColor: palette.error.main,
    textAlign: 'center',
    padding: spacing( 0.875 ),
    boxSizing: 'border-box',
    color: palette.colorTextSelected,
    boxShadow: `0 0 5px ${ palette.error.main }`,
  },
}));
