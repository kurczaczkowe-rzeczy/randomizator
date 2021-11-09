import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  row: {
    '&[role="row"]:hover': { backgroundColor: palette.fadedMain() },
    '& > [role="gridcell"]:nth-child(2) [role="cell"]': {
      display: 'flex',
      alignSelf: 'flex-end',
    },
  },
}));
