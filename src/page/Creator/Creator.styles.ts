import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing }) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '30% 60%',
    columnGap: '10%',
  },
  leftSpace: {
    display: 'flex',
    flexDirection: 'column',

    '& > div, & > button': { marginBottom: spacing( 4.25 ) },
  },
  rightSpace: {
    display: 'flex',
    flexDirection: 'column',

    '& > div': { marginBottom: spacing( 4.25 ) },
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& button': { width: 250 },
  },
}));
