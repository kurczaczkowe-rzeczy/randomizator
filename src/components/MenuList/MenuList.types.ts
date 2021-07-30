import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';

export interface IMenuList {
  /**
   * List of interactive menu elements.
   */
  items: IDrawerMenu[ 'items' ];
  /**
   * Method runs on close menu.
   */
  onClose: () => void;
}
