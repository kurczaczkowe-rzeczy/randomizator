export interface ITextNode {
  /**
   * Set custom class or set of classes for this component.
   */
  classes: string;
  /**
   * Specify if label should display with *. Only available for label type.
   */
  required?: boolean;
  /**
   * Specify type of component.
   */
  type?: 'input-text' | 'label';
  /**
   * Text describing
   */
  value: string;
}
