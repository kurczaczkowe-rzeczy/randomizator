export interface IButton{
  /**
   * Method after click Button
   */
  onClick?: () => void;
  /**
   * Type of Button. Default value is Button
   */
  type?: 'submit' | 'button';
  /**
   * Field determining text display on Button
   */
  value: string;
}
