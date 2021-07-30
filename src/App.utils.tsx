import _filter from 'lodash/filter';

import { GetString } from 'hooks/types';
import { hasAccess } from 'utils/permissionUtils';
import { ROUTES, USER_ROLES } from 'constans';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';
import Creator from 'page/Creator';
import Dashboard from 'page/Dashboard';

/**
 * Method return global routes for whole app that user will be interact.
 * @param getString - method used to provide locale string.
 */
export const getMenuItems = ( getString: GetString ): IDrawerMenu[ 'items' ] => [
  {
    children: getString( 'dashboard' ),
    id: 1,
    path: ROUTES.dashboard,
    access: [ USER_ROLES.ADMIN ],
  },
  {
    children: getString( 'formManagement' ),
    id: 2,
    path: ROUTES.home,
    access: [],
  },
];

type GetMenuItemsForCurrentUser = ( items: IDrawerMenu[ 'items' ], role: string ) => IDrawerMenu[ 'items' ];

export const getMenuItemsForCurrentUser: GetMenuItemsForCurrentUser = ( items, role ) =>
  _filter( items, ({ access }) => hasAccess( access, role ));

export const authenticatedRoutesCollection = [
  {
    key: 'creator',
    exact: true,
    component: Creator,
    path: ROUTES.home,
    access: [],
  },
  {
    key: 'dashboard',
    exact: true,
    component: Dashboard,
    path: ROUTES.dashboard,
    access: [ USER_ROLES.ADMIN ],
  },
];
