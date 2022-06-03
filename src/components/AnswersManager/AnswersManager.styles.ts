import makeStyles from '@material-ui/core/styles/makeStyles';

import { ANSWER_TABLE_HEIGHT, TAB_HEIGHT } from 'constans';

export default makeStyles({
  card: {
    '& > div': {
      flex: '1 1 auto',
      width: '100%',
    },
  },
  emptyInfoContainer: {
    height: ANSWER_TABLE_HEIGHT + TAB_HEIGHT,
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
