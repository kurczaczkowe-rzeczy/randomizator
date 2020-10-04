import React from 'react';
import Label from 'components/form/components/label/Label.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import classes from './form.module.scss';
import Button from 'components/form/components/button/Button.view';

const Form = () => (
  <form className={classes.form}>
    <div className={classes[ 'align-bottom' ]}>
      <Label content="Imie męskie" required />
      <TextInput required />
    </div>

    <div className={classes[ 'align-bottom' ]}>
      <Label content="Imie damskie" required />
      <TextInput required />
    </div>

    <Button value="Wyślij" type="submit" />
  </form>
);

export default Form;
