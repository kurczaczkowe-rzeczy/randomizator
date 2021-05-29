import { ReactElement } from 'react';

export interface IButton{
  /**
   * Icon element will be displaying before all content.
   */
  icon?: ReactElement;
  /**
   * Method after click Button.
   */
  onClick?: () => void;
  /**
   * Type of Button. Default value is Button.
   */
  type?: 'submit' | 'button';
  /**
   * Field determining text display on Button.
   */
  value: string;
  /**
   * Variant specify if button has or not icon. Default *variant* is button.
   */
  variant?: 'button' | 'iconButton';
}
