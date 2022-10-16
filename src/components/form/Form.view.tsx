import { SyntheticEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import _map from 'lodash/map';

import useLocaleString from 'hooks/useLocaleString';

import Label from './components/label/Label.view';
import TextInput from './components/textInput';
import Button from 'components/Button';

import classes from './form.module.scss';
import { IForm, IGuestValues } from './Form.types';

/** Components represents a document section containing interactive controls for submitting information. */
export const Form = ({
  fields,
  preview,
  additionalFunction,
  onSubmit,
}: IForm ): JSX.Element => {
  const { control, handleSubmit } = useFormContext< IGuestValues >();
  const getString = useLocaleString();

  return (
    <form
      className={ classNames( classes.form, { [ classes.disabled ]: preview }) }
      onSubmit={ handleSubmit( onSubmit ) }
    >
      { _map( fields, ({ name }) => (
        <div className={ classes.alignBottom }>
          {/* ToDo: issue #187 */}
          <Label content={ name } />
          <Controller
            control={ control }
            name={ name }
            render={ ({ field }): JSX.Element => (
              <TextInput { ...field } />
            ) }
          />
        </div>
      ))}
      <div className={ classes.checkIsNotRobot }>
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
      </div>
      <Button label={ getString( 'send' ) } type="submit" />
    </form>
  );
};

export default Form;
