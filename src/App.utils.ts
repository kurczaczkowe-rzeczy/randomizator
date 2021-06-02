import { GetString } from 'hooks/types';
import { APP_SUFFIX } from 'constans';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';

/**
 * Method return global routes for whole app that user will be interact.
 * @param getString - method used to provide locale string.
 */
export const getMenuItems = ( getString: GetString ): IDrawerMenu[ 'items' ] => [
  {
    active: true,
    children: getString( 'formManagement' ),
    id: 1,
    path: `${ APP_SUFFIX }/`,
  },
  {
    active: true,
    children: getString( 'dashboard' ),
    id: 1,
    path: `${ APP_SUFFIX }/dashboard`,
  },
];
