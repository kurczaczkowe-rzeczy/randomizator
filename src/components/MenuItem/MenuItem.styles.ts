import makeStyles from '@material-ui/core/styles/makeStyles';

import { MENU_ITEM_HEIGHT } from 'constans';

export default makeStyles(({
  palette,
  borders,
  spacing,
  fonts,
}) => ({
  root: {
    width: '100%',
    height: MENU_ITEM_HEIGHT,
    padding: spacing( 0, 2.5 ),
    color: palette.colorText,
    display: 'flex',
    alignItems: 'center',
    fontSize: fonts.size.menuItem,
    backgroundImage: `linear-gradient(${ palette.fadedMain() }, ${ palette.fadedMain() })`,
    backgroundSize: `0 ${ MENU_ITEM_HEIGHT }px`,
    backgroundRepeat: 'no-repeat',
    transition: 'background-size ease-in-out 300ms',
    cursor: 'pointer',

    '&:hover': { backgroundSize: `100% ${ MENU_ITEM_HEIGHT }px` },
    '&:focus': { backgroundSize: `100% ${ MENU_ITEM_HEIGHT }px` },
  },
  active: {
    backgroundSize: `100% ${ MENU_ITEM_HEIGHT }px`,
    borderLeft: borders.menu,
    padding: spacing( 0, 2 ),
  },
}));
