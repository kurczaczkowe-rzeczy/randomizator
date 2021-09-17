export interface IOption {
  /** Identifier for option. */
  id: string;
  /** Option name that will be displayed in select list. */
  name: string;
}

export interface IClasses {
  /** Class alias for use in components. */
  [ key: string ]: string;
}

export interface ISelect {
  /** Default value for select. */
  defaultValue: string;
  /** UI layout element that describe input. */
  label: string;
  /** Name described select. */
  name: string;
  /** Method fired when the component requests to be closed.
   *
   * @return undefined
   */
  onClose?: () => void;
  /** Method fired when user click on any option.
   *
   * @param option - {@link IOption}
   * @return undefined
   */
  onItemClick: ( option: IOption ) => void;
  /** Method fired when the component requests to be open.
   *
   * @return undefined
   */
  onOpen?: () => void;
  /** Control select open state. If not provided component was selfcontrolled */
  open?: boolean;
  /** Array of available options. */
  options?: IOption[];
  /** Value that will be passed to select component. */
  value?: string;
}
