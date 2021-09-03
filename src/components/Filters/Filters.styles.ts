import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing }) => ({
  root: { position: 'relative' },
  filterToggle: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  filterButton: {
    marginTop: '-50%',
    transform: 'translateY( 50% )',
  },
  filterChevron: { transition: 'transform ease-in-out 250ms' },
  filterChevronRotate: { transform: 'rotate(180deg)' },
  filterForm: { overflow: 'hidden' },
  hiddenButton: { display: 'none' },
  fieldsWrapper: {
    height: 'auto',
    maxHeight: 0,
    display: 'flex',
    rowGap: spacing( 2 ),
    columnGap: spacing( 2 ),
    alignItems: 'flex-end',
    transitionProperty: 'padding-top, max-height',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease-in-out',
  },
  rowOrder: { flexWrap: 'wrap' },
  columnOrder: { width: 'max-content', flexDirection: 'column' },
  // ToDo: issue #189
  expand: { maxHeight: 600, paddingTop: spacing( 1 ) },
}));
