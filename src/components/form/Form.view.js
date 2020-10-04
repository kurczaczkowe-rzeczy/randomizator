import React from 'react';
import Label from 'components/form/components/label/Label.view';
import TextInput from 'components/form/components/textInput/TextInput.view';
import classes from './form.module.scss';
import Button from 'components/form/components/button/Button.view';
import PropTypes from 'prop-types';

const Form = ({ sendFormFunction }) => (
  <form
    className={classes.form} onSubmit={( event ) => {
      event.preventDefault();
      const data = new FormData( event.target );

      sendFormFunction( data.get( 'name_male' ), data.get( 'name_female' ));
    }}
  >
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

Form.propTypes = { sendFormFunction: PropTypes.func };

Form.defaultProps = { sendFormFunction: () => {} };

export default Form;
