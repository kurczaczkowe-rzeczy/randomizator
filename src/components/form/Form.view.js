import React from 'react';
import Label from 'components/form/components/label/Label.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import classes from './form.module.scss';
import Button from 'components/form/components/button/Button.view';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => (
  <form className={classes.form} onSubmit={onSubmit}>
    <div className={classes[ 'align-bottom' ]}>
      <Label content="Imie męskie" required />
      <TextInput name="name_male" required />
    </div>

    <div className={classes[ 'align-bottom' ]}>
      <Label content="Imie damskie" required />
      <TextInput name="name_female" required />
    </div>

    <Button value="Wyślij" type="submit" />
  </form>
);

Form.propTypes = { onSubmit: PropTypes.func };

Form.defaultProps = { onSubmit: () => {} };

export default Form;
