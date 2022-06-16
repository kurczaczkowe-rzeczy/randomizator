import { ReactElement, MouseEvent } from 'react';

export interface IButton{
  /** Specify additional styles passed to button element. */
  className?: string;
  /**
   * Icon element will be displaying before all content.
   */
  icon?: ReactElement;
  /**
   * Action call on user interaction via mouse click on this element.
   */
  onClick?: ( event: MouseEvent<HTMLElement> ) => void;
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
  variant?: 'button' | 'iconButton' | 'textIconButton';
}
