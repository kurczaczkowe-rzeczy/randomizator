import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectWrapper: { marginBottom: spacing( 3 ) },
  linkWrapper: { display: 'flex' },
  openInNewIconWrapper: {
    marginRight: spacing( 1 ),

    '&:visited, &:link': { color: 'inherit' },
    '&:focus': { color: palette.primary.main },
  },
  openInNewIcon: {
    cursor: 'pointer',

    '&:hover': { fill: palette.primary.main },
  },
  copyText: {
    margin: spacing(
      0,
      0,
      0,
      1.25,
    ),
    justifyContent: 'space-between',
    overflowX: 'scroll',
    scrollbarColor: `${ palette.primary.main } ${ palette.backgroundDark }`,
    scrollbarWidth: 'thin',
    whiteSpace: 'nowrap',
  },
}));
