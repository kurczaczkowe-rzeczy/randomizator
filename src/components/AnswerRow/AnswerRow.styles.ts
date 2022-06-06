import makeStyles from '@material-ui/core/styles/makeStyles';

import {
  ANSWER_EDIT_ICON_COLUMN_WIDTH,
  ANSWER_LINE_THROUGH_BOLD,
  ANSWER_PADDING_SPACE_TO_REMOVE,
} from 'constans';

const SPACE_TO_REMOVE = ANSWER_EDIT_ICON_COLUMN_WIDTH + 2 * ANSWER_PADDING_SPACE_TO_REMOVE;

export default makeStyles(({ palette }) => ({
  row: {
    '&[role="row"]:hover': { backgroundColor: palette.fadedMain() },
    '& > [role="gridcell"]:nth-child(2) [role="cell"]': {
      display: 'flex',
      alignSelf: 'flex-end',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: ANSWER_PADDING_SPACE_TO_REMOVE,
      width: 0,
      height: ANSWER_LINE_THROUGH_BOLD,
      display: 'block',
      backgroundColor: palette.colorText,
      transition: 'width ease-in-out 200ms',
    },
    transition: 'background-color ease-in-out 200ms',
  },
  deleted: { '&::before': { width: `calc(100% - ${ SPACE_TO_REMOVE }px)` }},
}));
