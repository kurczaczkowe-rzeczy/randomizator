import { SyntheticEvent } from 'react';

export interface ILogin{
  /**
   * Specifies the error messages when logging in fail
   */
  authError?: string | null;
  /**
   * Method for login user
   */
  onLogin: ( event: SyntheticEvent ) => void;
}
