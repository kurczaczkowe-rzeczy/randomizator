import { ChangeEvent, ForwardedRef } from 'react';

export interface ITextInput {
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  fullWidth?: boolean;
  name?: string;
  onChange?: ( event: ChangeEvent<HTMLInputElement> ) => void;
  onFocus?: ( event: ChangeEvent<HTMLInputElement> ) => void;
  placeholder?: string;
  required?: boolean;
  type?: 'email' | 'password' | 'text';
  value?: string;
}
