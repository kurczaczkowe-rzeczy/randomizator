import { Controller, useForm } from 'react-hook-form';

import useLocaleString from 'hooks/useLocaleString';

import Label from 'components/form/components/label';
import ButtonView from 'components/Button';
import Card from 'components/card';
import TextInput from 'components/form/components/textInput';

import useStyle from './UserCreator.styles';
import { IUserCreator, IUserCreatorValues } from './UserCreator.types';

/**
 * Component used to add new user to app.
 */
const UserCreator = ({ onSubmit, defaultValues }: IUserCreator ): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();
  const {
    control,
    handleSubmit,
    register,
  } = useForm<IUserCreatorValues>({ defaultValues });

  return (
    <Card
      centerBody={ false }
      body={ (
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
            <Controller
              control={ control }
              name="formName"
              render={ ({ field }): JSX.Element => (
                <TextInput
                  required
                  type="text"
                  { ...field }
                />
              ) }
            />
          </div>
          <ButtonView value={ getString( 'addUser' ) } type="submit" />
        </form>
      ) }
    />
  );
};

export default UserCreator;
export { UserCreator };
