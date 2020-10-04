import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/form/components/label/Label.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import Button from 'components/form/components/button/Button.view';
import classes from './form.module.scss';

const Form = ({ onSubmit, preview }) => {
  const formClass = [ classes.form ];

  if ( preview ) {
    formClass.push( classes.disabled );
  }

  return (
    <form className={ formClass.join( ' ' ) } onSubmit={ onSubmit }>
      <div className={ classes[ 'align-bottom' ] }>
        <Label content="Imie męskie" required />
        <TextInput name="name_male" required />
      </div>

      <div className={ classes[ 'align-bottom' ] }>
        <Label content="Imie damskie" required />
        <TextInput name="name_female" required />
      </div>

      <Button value="Wyślij" type="submit" />
    </form>
  );
};

Form.propTypes = {
  preview: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
  preview: false,
};
export default Form;
