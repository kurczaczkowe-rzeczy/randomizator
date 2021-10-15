import { FormEvent, SyntheticEvent } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface IForm {
  /**
   * Additional function in textNode
   */
  additionalFunction: ( event: SyntheticEvent ) => void;
  /**
   * Method define what happen when response form was submit
   */
  onSubmit: SubmitHandler< FormEvent< HTMLFormElement >>;
  /**
   * Define if form could send response
   */
  preview: boolean;
}

export type FormContainer = Partial<Omit<IForm, 'onSubmit'>> & {
  onSubmit?: ( fields: { nameFemale: string; nameMale: string }) => void;
};

export interface IGuestValues {
  /**
   * Value uses to check fi human user fill the form.
   */
  checkIsNotRobot: string;
  [ key: string ]: string | undefined;
}
