import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from './components/label/Label.view';
import TextInput from './components/textInput/TextInput.view';
import Button from './components/button/Button.view';
import classes from './form.module.scss';

// ToDo create component that wraps label and textInput
const Form = ({
  onSubmit, preview, onChange,
}) => (
  <form className={ classNames( classes.form, { [ classes.disabled ]: preview }) } onSubmit={ onSubmit }>
    <div className={ classes[ 'align-bottom' ] }>
      <Label
        required
        content="Imie męskie"
      />
      <TextInput
        required
        name="name_male"
        onChange={ onChange }
      />
    </div>

    <div className={ classes[ 'align-bottom' ] }>
      <Label
        required
        content="Imie damskie"
      />
      <TextInput
        required
        name="name_female"
        onChange={ onChange }
      />
    </div>
    <TextInput
      required
      fullWidth
      name="check_is_not_robot"
      onChange={ onChange }
      placeholder="Aby wysłać, wpisz nazwę formularza"
    />
    <Button value="Wyślij" type="submit" />
  </form>
);

Form.propTypes = {
  preview: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  preview: false,
};
export default Form;
