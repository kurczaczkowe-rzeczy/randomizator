import makeStyles from '@material-ui/core/styles/makeStyles';

import { ANSWER_TABLE_HEIGHT, TAB_HEIGHT } from 'constans';

export default makeStyles({
  card: {
    '& > div:last-of-type': {
      flex: '1 1 auto',
      width: '100%',
      height: ANSWER_TABLE_HEIGHT + TAB_HEIGHT,
    },
  },
  emptyInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 'calc(24px + 2em)',
  },
});
