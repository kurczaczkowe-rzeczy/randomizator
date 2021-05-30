import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({
  spacing,
  palette,
  borders,
  shadow,
}) => ({
  box: {
    boxSizing: 'border-box',
    border: borders.dropzoneBox,
    borderRadius: spacing( 1.25 ),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: spacing( 1 ),
    position: 'relative',
    zIndex: 1,
    transition: 'all 300ms ease-in-out',
    padding: spacing( 4.375, 1.875 ),

    '& p': {
      color: palette.colorText,
      margin: 0,
    },
  },
  active: {
    backgroundColor: palette.backgroundLight,
    border: borders.dropzoneBoxActive,
    boxShadow: shadow.dropzoneBoxActive,

    '& $icon': { color: palette.primary.main },
  },
  icon: {
    color: palette.colorText,
    marginBottom: '0.5em',
    fontSize: '3em',
  },
}));
