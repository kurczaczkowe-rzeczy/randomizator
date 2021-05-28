import { IMenuItem } from 'components/MenuItem/MenuItem.types';

export interface IDrawerMenuItem extends IMenuItem {
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
