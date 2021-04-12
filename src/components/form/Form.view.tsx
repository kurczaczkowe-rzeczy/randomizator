import classNames from 'classnames';

import Label from './components/label/Label.view';
import TextInput from './components/textInput/TextInput.view';
import Button from 'components/Button';

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
}: IForm ): JSX.Element => (
  <form
    className={ classNames( classes.form, { [ classes.disabled ]: preview }) }
    onSubmit={ ( event ): void => {
      event.preventDefault();
      onSubmit( event );
    } }
  >
    {/* ToDo use constants instead of hardcoded strings */}
    <div className={ classes.alignBottom }>
      <Label content="Imie męskie" />
      <TextInput name="name_male" />
    </div>
    <div className={ classes.alignBottom }>
      <Label content="Imie damskie" />
      <TextInput name="name_female" />
    </div>
    <TextInput
      required
      fullWidth
      name="check_is_not_robot"
      placeholder="Aby wysłać, wpisz nazwę formularza"
      onChange={ additionalFunction }
      onFocus={ additionalFunction }
    />
    <Button value="Wyślij" type="submit" />
  </form>
);

export default Form;
