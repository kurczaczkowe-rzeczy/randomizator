import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

import classes from './textInput.module.scss';
import { ITextInput } from './TextInput.types';

// ToDo move to global scope
/**
 * UI form control allows user enter and edit text.
 */
const TextInput = ({
  required = false,
  name = undefined,
  placeholder = undefined,
  type = 'text',
  fullWidth = false,
  onChange = undefined,
  onFocus = undefined,
  value = '',
  forwardedRef,
}: ITextInput ): JSX.Element => (
  <input
    ref={ forwardedRef }
    required={ required }
    autoComplete="off"
    type={ type }
    placeholder={ placeholder }
    name={ name }
    className={ classNames( classes.inputText, { [ classes.fullWidth ]: fullWidth }) }
    onChange={ onChange }
    onFocus={ onFocus }
    value={ value }
  />
);

const forwardRefHandler = ( props: ITextInput, ref: ForwardedRef<HTMLInputElement> ): JSX.Element =>
  <TextInput { ...props } forwardedRef={ ref } />;

forwardRefHandler.displayName = `ForwardRef__${ TextInput.name }`;

export default forwardRef( forwardRefHandler );
