import classNames from 'classnames';

import useLocaleString from 'hooks/useLocaleString';

import Label from './components/label/Label.view';
import TextInput from './components/textInput';
import ButtonView from 'components/Button';

import classes from './form.module.scss';
import { IForm } from './Form.types';

// ToDo create component that wraps label and textInput
/**
 * Components represents a document section containing interactive controls for submitting information
 */
export const Form = ({
  preview,
  additionalFunction,
  onSubmit,
}: IForm ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <form
      className={ classNames( classes.form, { [ classes.disabled ]: preview }) }
      onSubmit={ ( event ): void => {
        event.preventDefault();
        onSubmit( event );
      } }
    >
      <div className={ classes.alignBottom }>
        <Label content={ getString( 'nameMaleLabel' ) } />
        <TextInput name="name_male" />
      </div>
      <div className={ classes.alignBottom }>
        <Label content={ getString( 'nameFemaleLabel' ) } />
        <TextInput name="name_female" />
      </div>
      <TextInput
        required
        fullWidth
        name="check_is_not_robot"
        placeholder={ getString( 'formSendPlaceholder' ) }
        onChange={ additionalFunction }
        onFocus={ additionalFunction }
      />
      <ButtonView value={ getString( 'send' ) } type="submit" />
    </form>
  );
};

export default Form;
