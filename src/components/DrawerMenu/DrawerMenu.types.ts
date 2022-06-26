import { IMenuItem } from 'components/MenuItem/MenuItem.types';

import { Roles } from 'types';

export interface IDrawerMenuItem extends IMenuItem {
  /** Array of roles with access to page. */
  access: Roles;
  /** Specify if item associated with route has nested routes. */
  hasNestedRoutes?: boolean;
  /**
   * Path to specific page.
   */
  path: string;
}

export interface IDrawerMenu {
  /**
   * List of elements that displays in menu.
   */
  items: IDrawerMenuItem[];
}
