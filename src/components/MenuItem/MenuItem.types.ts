import { ReactNode, SyntheticEvent } from 'react';

import { StringOrNumber } from 'types';

export interface IMenuItem {
  /**
   * Specify content of menu element.
   */
  children: ReactNode;
  /**
   * Item identifier.
   */
  id?: StringOrNumber;
}

export interface IInteractiveMenuItem extends IMenuItem {
  /**
   * Specify if element has state active or not.
   */
  active: boolean;
  /**
   * Action call on user interaction via mouse click on this element.
   */
  onClick: ( event?: SyntheticEvent ) => void;
}

export type InteractiveMenuItems = IInteractiveMenuItem[];
