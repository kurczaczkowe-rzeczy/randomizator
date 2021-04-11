import { FormEventHandler, SyntheticEvent } from 'react';

export interface IForm {
  /**
   * Additional function in textNode
   */
  additionalFunction: ( event: SyntheticEvent ) => void;
  /**
   * Method define what happen when response form was submit
   */
  onSubmit: FormEventHandler<HTMLFormElement>;
  /**
   * Define if form could send response
   */
  preview: boolean;
}

export type FormContainer = Partial<Omit<IForm, 'onSubmit'>> & {
  onSubmit?: ( nameMale: string, nameFemale: string ) => void;
};
