import { useForm, Controller } from 'react-hook-form';

import useLocaleString from 'hooks/useLocaleString';

import Card from 'components/card';
import ButtonView from 'components/Button';
import TextInput from 'components/form/components/textInput';

import { ILogin, ILoginValues } from './Login.types';
import useStyles from './Login.styles';

/**
 * Page displaying Login form
 */
export const Login = ({ onLogin, authError }: ILogin ): JSX.Element => {
  const styles = useStyles();
  const getString = useLocaleString();
  const { control, handleSubmit } = useForm<ILoginValues>();

  return (
    <div className={ styles.root }>
      <Card
        cardClass={ styles.card }
        title={ getString( 'login' ) }
        body={ (
          <>
            <form onSubmit={ handleSubmit( onLogin ) } method="post">
              <Controller
                control={ control }
                name="email"
                render={ ({ field }): JSX.Element => (
                  <TextInput
                    required
                    type="email"
                    placeholder={ getString( 'emailAddress' ) }
                    { ...field }
                  />
                ) }
              />
              <Controller
                control={ control }
                name="password"
                render={ ({ field }): JSX.Element => (
                  <TextInput
                    required
                    type="password"
                    placeholder={ getString( 'password' ) }
                    { ...field }
                  />
                ) }
              />
              <ButtonView value={ getString( 'login' ) } type="submit" />
            </form>
            {authError && <div className={ styles.error }>{ authError }</div>}
          </>
        ) }
      />
    </div>
  );
};

export default Login;
