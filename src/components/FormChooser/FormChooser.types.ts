import { ISelect } from 'components/Select';

export interface IFormChooser {
  /** Identifier of logged user. It's used to set part of path to specific form page. */
  creatorID: string;
  /** Identifier of default selected form. If forms are not already fetched this value should be empty string. */
  defaultFormID: ISelect[ 'defaultValue' ];
  /** Identifier of selected form. It's used to display proper option in select and
   * set part of path to specific form page. */
  formID: string;
  /** Array of basic information logged user forms. Each item in this collection have identifier and name. */
  forms: Required<ISelect[ 'options' ]>;
  /** Method runs when user select form from select element. */
  onFormSelect: ISelect[ 'onItemClick' ];
}
