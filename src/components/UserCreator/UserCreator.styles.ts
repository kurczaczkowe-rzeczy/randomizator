import makeStyles from '@material-ui/core/styles/makeStyles';

const LABEL_WIDTH = 195;
const LABEL_MARGIN = 15;

export default makeStyles(({ spacing }) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: spacing( 1 ),
  },
  row: {
    width: '100%',

    '& > [class*=label]': {
      width: LABEL_WIDTH,
      display: 'inline-flex',
      justifyContent: 'flex-end',
    },

    '& > input': { width: `calc(100% - ${ LABEL_WIDTH + LABEL_MARGIN }px)` },
  },
}));
