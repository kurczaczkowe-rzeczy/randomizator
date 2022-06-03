import makeStyles from '@material-ui/core/styles/makeStyles';
import { ANSWER_TABLE_HEIGHT } from 'constans';

export default makeStyles(({ palette }) => ({
  tableWrapper: {
    height: ANSWER_TABLE_HEIGHT,
    backgroundColor: palette.backgroundLight,
  },
}));
