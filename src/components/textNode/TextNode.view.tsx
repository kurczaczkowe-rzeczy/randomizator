import React from 'react';

interface ITextNode {
  classes: string;
  required?: boolean;
  type?: 'input-text' | 'label';
  value: string;
}

const TextNode = ({
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
