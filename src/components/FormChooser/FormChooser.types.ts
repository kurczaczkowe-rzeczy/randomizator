import { ISelect } from 'components/Select';

export interface IFormChooser {
  /** Link to form for guest users. */
  link: string;
  /** Props passed to Select with forms. */
  selectFormsProps: ISelect;
}
