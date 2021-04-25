import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';

import { RootState } from 'store/reducers/rootReducer';

import FormView from './Form.view';
import { FormContainer } from './Form.types';
import useLocaleString from '../../hooks/useLocaleString';

const Form = ({
  preview = false,
  onSubmit = (): void => {},
  additionalFunction = (): void => {},
}: FormContainer ): JSX.Element => {
  const getString = useLocaleString();
  const nameOfForm = useSelector(( state: RootState ) => state.form.name );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const someFieldFill = ( ...args: any[]): boolean => _some( args, ( field ) => !_isEmpty( field ));

  const handleSubmit = useCallback(( event ) => {
    const data = new FormData( event.target );
    const fromInput = data.get( 'check_is_not_robot' );

    if ( _isEmpty( fromInput )) {
      alert( getString( 'formErrorEmptyFormName' ));
    } else if ( !_isEqual( fromInput, nameOfForm )) {
      alert( getString( 'formErrorWrongFormName' ));
    } else {
      if ( someFieldFill( data.get( 'name_male' ), data.get( 'name_female' ))) {
        onSubmit( data.get( 'name_male' ) as string, data.get( 'name_female' ) as string );
        event.target.reset();
      } else {
        alert( getString( 'formErrorEmptyFormFields' ));
      }
    }
  }, [
    nameOfForm,
    onSubmit,
    getString,
  ]);

  return (
    <FormView
      preview={ preview }
      onSubmit={ handleSubmit }
      additionalFunction={ additionalFunction }
    />
  );
};

export default Form;
