import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Label from './components/label/Label.view';
import TextInput from './components/textInput/TextInput.view';
import Button from './components/button/Button.view';
import classes from './form.module.scss';

// ToDo create component that wraps label and textInput
const Form = ({ onSubmit, preview }) => (
  <form className={ classNames( classes.form, { [ classes.disabled ]: preview }) } onSubmit={ onSubmit }>
    <div className={ classes[ 'align-bottom' ] }>
      <Label
        required
        content="Imie męskie"
      />
      <TextInput
        required
        name="name_male"
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
      />
    </div>
    <Button value="Wyślij" type="submit" />
  </form>
);

Form.propTypes = {
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  preview: false,
};
export default Form;
