import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
} from 'react';
import { ChangeHandler } from 'react-hook-form';

// ToDo: issue #187
export interface ITextInput {
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  fullWidth?: boolean;
  name?: string;
  onBlur?: (( event: FocusEvent<HTMLInputElement> ) => void ) | ChangeHandler;
  onChange?: (( event: ChangeEvent<HTMLInputElement> ) => void ) | ChangeHandler;
  onFocus?: ( event: FocusEvent<HTMLInputElement> ) => void ;
  placeholder?: string;
  required?: boolean;
  type?: 'email' | 'password' | 'text' | 'number';
  value?: string;
}
