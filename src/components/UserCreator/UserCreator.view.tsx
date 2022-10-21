import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useLocalize from 'hooks/useLocalize';

import Label from 'components/form/components/label';
import Button from 'components/Button';
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
  const localize = useLocalize();
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
        {/* ToDo: issue #187 */}
        <Label required content={ localize( 'email' ) } />
        <TextInput
          required
          type="email"
          { ...register( 'email', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        {/* ToDo: issue #187 */}
        <Label required content={ localize( 'password' ) } />
        <TextInput
          required
          type="password"
          { ...register( 'password', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        {/* ToDo: issue #187 */}
        <Label required content={ localize( 'nickname' ) } />
        <TextInput
          required
          type="text"
          { ...register( 'nickname', { required: true }) }
        />
      </div>
      <div className={ styles.row }>
        {/* ToDo: issue #187 */}
        <Label required content={ localize( 'formName' ) } />
        <TextInput
          required
          type="text"
          { ...register( 'formName', { required: true }) }
        />
      </div>
      <Button label={ localize( 'addUser' ) } type="submit" />
    </form>
  );
};

export default UserCreator;
