import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from './components/label/Label.view';
import TextInput from './components/textInput/TextInput.view';
import Button from 'components/button/Button.view';
import classes from './form.module.scss';

// ToDo create component that wraps label and textInput
const Form = ({
  preview,
  additionalFunction,
  onSubmit,
}) => (
  <form className={ classNames( classes.form, { [ classes.disabled ]: preview }) } onSubmit={ onSubmit }>
    {/* ToDo use constants instead of hardcoded strings */}
    <div className={ classes[ 'align-bottom' ] }>
      <Label required content="Imie męskie" />
      <TextInput required name="name_male" />
    </div>
    <div className={ classes[ 'align-bottom' ] }>
      <Label required content="Imie damskie" />
      <TextInput required name="name_female" />
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

Form.propTypes = {
  additionalFunction: PropTypes.func,
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  additionalFunction: () => {},
  onSubmit: () => {},
  preview: false,
};
export default Form;
