import { SyntheticEvent } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Fields, Mapping } from 'types';

export interface IForm {
  /** Additional function in textNode. */
  additionalFunction: ( event: SyntheticEvent ) => void;
  /** Array of fields used in form. */
  fields: Fields;
  /** Method define what happen when response form was submit. */
  onSubmit: SubmitHandler< IGuestValues >;
  /** Define if form could send response. */
  preview: boolean;
}

export type GuestSubmitHandler = ( fields: IGuestValues ) => Promise< void >;

export type FormContainer = Partial<Omit<IForm, 'onSubmit'>> & {
  /** Name of selected form. */
  name: string;
  /** Method run after submit button was clicked. */
  onSubmit?: ( fields: Mapping< string > ) => Promise< void >;
};

export interface IGuestValues extends Mapping< string >{
  /** Value uses to check if human user fill the form. */
  checkIsNotRobot: string;
}
