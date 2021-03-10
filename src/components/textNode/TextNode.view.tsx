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

/**
 * This component is used for preview UI elements like label or inputs.
 */
export const TextNode = ({
  required = false,
  type = 'label',
  value,
  classes,
}: ITextNode ): JSX.Element => (
  <p className={ classes }>
    { value }
    {( required && type === 'label' ) && <span>* </span> }
    { type === 'label' && ':'}
  </p>
);

export default TextNode;
