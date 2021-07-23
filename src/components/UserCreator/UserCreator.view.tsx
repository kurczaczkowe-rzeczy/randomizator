import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useLocaleString from 'hooks/useLocaleString';

import Label from 'components/form/components/label';
import ButtonView from 'components/Button';
import TextInput from 'components/form/components/textInput';

import useStyle from './UserCreator.styles';
import { IUserCreator, IUserCreatorValues } from './UserCreator.types';

/**
 * Component used to add new user to app.
 */
export const UserCreator = ({
  defaultValues,
  shouldResetForm = false,
  onReset,
  onSubmit,
}: IUserCreator ): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();
  const {
    handleSubmit,
    register,
    reset,
  } = useForm<IUserCreatorValues>({ defaultValues });

  useEffect(() => {
    if ( shouldResetForm ) {
      onReset();
      reset( defaultValues );
    }
  }, [ shouldResetForm ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      className={ styles.form }
      onSubmit={ handleSubmit( onSubmit ) }
    >
      <div className={ styles.row }>
        <Label required content={ getString( 'email' ) } />
        <TextInput
          required
          type="email"
          { ...register( 'email', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        <Label required content={ getString( 'password' ) } />
        <TextInput
          required
          type="password"
          { ...register( 'password', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        <Label required content={ getString( 'nickname' ) } />
        <TextInput
          required
          type="text"
          { ...register( 'nickname', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        <Label required content={ getString( 'formName' ) } />
        <TextInput
          required
          type="text"
          { ...register( 'formName', { required: true }) }
        />
      </div>
      <ButtonView value={ getString( 'addUser' ) } type="submit" />
    </form>
  );
};

export default UserCreator;
