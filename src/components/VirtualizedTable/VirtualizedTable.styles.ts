import makeStyles from '@material-ui/core/styles/makeStyles';

import { TABLE_BORDER_RADIUS } from 'constans';

export default makeStyles(({ palette }) => ({
  headerRow: {
    backgroundColor: palette.primary.main,
    borderTopLeftRadius: TABLE_BORDER_RADIUS,
    borderTopRightRadius: TABLE_BORDER_RADIUS,
  },
  headerCell: {
    cursor: 'pointer',

    '& > div': { display: 'flex' },
  },
  noninteractive: {
    pointerEvents: 'none',
    cursor: 'default',
  },
  row: {
    alignItems: 'center',

    '&:nth-child(even)': { backgroundColor: palette.fadedBackgroundDark() },
  },
  flexContainer: {
    display: 'flex',
    boxSizing: 'border-box',
  },
  arrow: {
    fontsize: '1.25rem',
    position: 'relative',
    top: -2,
    left: 4,
    transition: 'transform ease-in-out 200ms',
  },
  rotateArrow: { transform: 'rotate(180deg)' },
}));
