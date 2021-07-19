import { GetString } from 'hooks/types';
import { ROUTES } from 'constans';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';

/**
 * Method return global routes for whole app that user will be interact.
 * @param getString - method used to provide locale string.
 */
export const getMenuItems = ( getString: GetString ): IDrawerMenu[ 'items' ] => [
  {
    active: false,
    children: getString( 'dashboard' ),
    id: 1,
    path: ROUTES.dashboard,
  },
  {
    active: true,
    children: getString( 'formManagement' ),
    id: 2,
    path: ROUTES.home,
  },
];
