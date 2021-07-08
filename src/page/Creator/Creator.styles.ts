import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing, palette }) => ({
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
  formNameWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowGap: { marginBottom: spacing( 3 ) },
  linkWrapper: { display: 'flex' },
  openInNewIconWrapper: { marginRight: spacing( 1 ) },
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
  fullWidth: { '& > div:first-of-type': { width: '100%' }},
}));
