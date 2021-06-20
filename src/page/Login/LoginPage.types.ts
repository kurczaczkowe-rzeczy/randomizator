export interface ILoginValues {
  /**
   * Specifies mail account that user should logged in.
   */
  email: string;
  /**
   * Strings allows authenticate user email.
   */
  password: string;
}

export interface ILogin {
  /**
   * Specifies the error messages when logging in fail
   */
  authError: string | null;
  /**
   * Method for Login user
   */
  onLogin: ( data: ILoginValues ) => void;
}
