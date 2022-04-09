import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  root: {
    'del&::before, del&::after': {
      clipPath: 'inset(100%)',
      clip: 'rect(1px, 1px, 1px, 1px)',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      height: 1,
      width: 1,
    },
    'del&::before': { content: '" [deletion start] "' },
    'del&::after': { content: '" [deletion end] "' },
  },
  emptyAnswer: {
    fontStyle: 'italic',
    color: palette.colorText,
  },
}));
