export interface IButton{
  /**
   * Method after click button
   */
  onClick?: () => void;
  /**
   * Type of button. Default value is button
   */
  type?: 'submit' | 'button';
  /**
   * Field determining text display on button
   */
  value: string;
}
