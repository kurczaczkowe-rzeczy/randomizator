import { SyntheticEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import useLocaleString from 'hooks/useLocaleString';

import Label from './components/label/Label.view';
import TextInput from './components/textInput';
import ButtonView from 'components/Button';

import classes from './form.module.scss';
import { IForm, IGuestValues } from './Form.types';

/**
 * Components represents a document section containing interactive controls for submitting information
 */
export const Form = ({
  preview,
  additionalFunction,
  onSubmit,
}: IForm ): JSX.Element => {
  const { control, handleSubmit } = useFormContext<IGuestValues>();
  const getString = useLocaleString();

  return (
    <form
      className={ classNames( classes.form, { [ classes.disabled ]: preview }) }
      onSubmit={ handleSubmit( onSubmit ) }
    >
      <div className={ classes.alignBottom }>
        {/* ToDo: issue #187 */}
        <Label content={ getString( 'nameMaleLabel' ) } />
        <Controller
          control={ control }
          name="nameMale"
          render={ ({ field }): JSX.Element => (
            <TextInput { ...field } />
          ) }
        />
      </div>
      <div className={ classes.alignBottom }>
        {/* ToDo: issue #187 */}
        <Label content={ getString( 'nameFemaleLabel' ) } />
        <Controller
          control={ control }
          name="nameFemale"
          render={ ({ field }): JSX.Element => (
            <TextInput { ...field } />
          ) }
        />
      </div>
      <Controller
        control={ control }
        name="checkIsNotRobot"
        render={ ({ field }): JSX.Element => (
          <TextInput
            required
            fullWidth
            onFocus={ additionalFunction }
            placeholder={ getString( 'formSendPlaceholder' ) }
            { ...field }
            onChange={ ( event: SyntheticEvent ) => {
              additionalFunction( event );
              field.onChange( event );
            } }
          />
        ) }
      />
      <ButtonView value={ getString( 'send' ) } type="submit" />
    </form>
  );
};

export default Form;
