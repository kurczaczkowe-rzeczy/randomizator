import { matchPath } from 'react-router';
import { History } from 'history';
import _map from 'lodash/map';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';
import { InteractiveMenuItems } from 'components/MenuItem/MenuItem.types';

/**
 * Method get *items* and map them to array of objects that includes all properties from *item* excluded *path*
 * property. The *path* property is used to create function which routes app to specific place described in *path*
 * and close drawer menu. Newly created function is added as *onClick* property to each item.
 *
 * @param items - collection of menu item information.
 * @param history - store information about routing history.
 * @param closeDrawerMenu = method closes drawer menu.
 */
export const getMenuItems = (
  items: IDrawerMenu[ 'items' ],
  history: History,
  closeDrawerMenu: () => void,
): InteractiveMenuItems => _map( items, ({
  children,
  id,
  path,
}) => ({
  active: Boolean( matchPath( history.location.pathname, { path, exact: true })?.isExact ),
  children,
  id,
  onClick: (): void => {
    history.push( path );
    closeDrawerMenu();
  },
}));
