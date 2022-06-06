import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(( theme ) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '47% 47%',
    columnGap: '6%',
    rowGap: '12%',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12%',
  },
}));
