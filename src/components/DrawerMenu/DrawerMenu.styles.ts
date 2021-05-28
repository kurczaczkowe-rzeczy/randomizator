import { CSSProperties } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import {
  HEIGHT_OF_COLLAPSED_MENU,
  HEIGHT_OF_EXPANDED_MENU,
  WIDTH_OF_COLLAPSED_MENU,
  WIDTH_OF_EXPANDED_MENU,
} from 'constans';

const expandedSizes = {
  width: WIDTH_OF_EXPANDED_MENU,
  height: HEIGHT_OF_EXPANDED_MENU,
};

const expandedRules = {
  ...expandedSizes,
  borderBottom: 0,
  borderBottomRightRadius: 0,
};

const intermediateRules = ( menu: CSSProperties['border']) => ({
  ...expandedRules,
  borderBottom: menu,
}) as const;

const collapsedRules = ( menu: CSSProperties['border']) => ({
  width: WIDTH_OF_COLLAPSED_MENU,
  height: HEIGHT_OF_COLLAPSED_MENU,
  borderBottom: menu,
  borderBottomRightRadius: '100%',
}) as const;

export default makeStyles(({
  palette,
  spacing,
  borders,
  fonts,
}) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    ...collapsedRules( borders.menu ),
    padding: spacing( 2.5, 0 ),
    backgroundColor: palette.backgroundLight,
    borderRight: borders.menu,
  },
  iconButton: {
    marginTop: spacing( -1.375 ),
    marginLeft: spacing( 1.625 ),
    '&:focus': { boxShadow: 'none' },
  },
  menuIcon: {
    color: palette.primary.main,
    fontSize: fonts.size.menuButton,
  },
  expand: { animation: '$expand 500ms ease-in-out forwards' },
  collapse: { animation: '$collapse 500ms ease-in-out forwards' },
  disablePointerEvents: { pointerEvents: 'none' },
  menuItemsWrapper: {
    marginTop: spacing( 2.625 ),
    display: 'grid',
    rowGap: spacing( 2 ),
    opacity: 1,
    transition: 'opacity ease-out 300ms',

    '& > [role="menuitem"]': { transition: 'font-size ease-out 200ms' },
  },
  hideItems: {
    opacity: 0,

    '& > [role="menuitem"]': { fontSize: 0 },
  },
  '@keyframes expand': {
    '0%': { ...collapsedRules( borders.menu ) },
    '90%': { ...intermediateRules( borders.menu ) },
    '100%': { ...expandedRules },
  },
  '@keyframes collapse': {
    '0%': { ...expandedRules },
    '10%': { ...intermediateRules( borders.menu ) },
    '100%': { ...collapsedRules( borders.menu ) },
  },
}));
