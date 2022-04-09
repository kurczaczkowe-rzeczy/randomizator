import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  root: {
    color: palette.fadedColorText(),
    pointerEvents: 'none',
    transition: 'color 300ms ease-in-out',
  },
  dirty: {
    color: palette.colorTextSelected,
    pointerEvents: 'auto',
    cursor: 'pointer',
  },
}));
