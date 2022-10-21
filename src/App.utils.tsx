import _filter from 'lodash/filter';

import { Localize } from 'hooks/types';
import { hasAccess } from 'utils/permissionUtils';
import { Role } from 'types';
import { ROUTES } from 'constans';

import { IProtectedRoute } from 'components/ProtectedRoute';
import { IDrawerMenu } from 'components/DrawerMenu';
import Creator from 'page/Creator';
import Dashboard from 'page/Dashboard';

/**
 * Method return global routes for whole app that user will be interacted.
 * @param localize - method used to provide locale string.
 */
export const getMenuItems = ( localize: Localize ): IDrawerMenu[ 'items' ] => [
  {
    // ToDo: consider if there's only should be key for localization and localiztion should be resolving in component
    children: localize( 'dashboard' ),
    id: 1,
    path: ROUTES.dashboard,
    access: [],
    hasNestedRoutes: true,
  },
  {
    children: localize( 'formManagement' ),
    id: 2,
    path: ROUTES.home,
    access: [],
  },
];

type GetMenuItemsForCurrentUser = ( items: IDrawerMenu[ 'items' ], role: Role ) => IDrawerMenu[ 'items' ];

export const getMenuItemsForCurrentUser: GetMenuItemsForCurrentUser = ( items, role ) =>
  _filter( items, ({ access }) => hasAccess( access, role ));

type AuthenticatedRoute = Omit<IProtectedRoute, 'currentUserRole'> & { key: string };

export const authenticatedRoutesCollection: AuthenticatedRoute[] = [
  {
    key: 'creator',
    exact: true,
    component: Creator,
    path: ROUTES.home,
    access: [],
  },
  {
    key: 'dashboard',
    exact: false,
    component: Dashboard,
    path: ROUTES.dashboard,
    access: [],
  },
];
