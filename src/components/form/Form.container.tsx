import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';

import FormView from './Form.view';
import { FormContainer } from 'components/form/Form.types';
import { RootState } from 'store/reducers/rootReducer';

const Form = ({
  preview = false,
  onSubmit = ():void => {},
  additionalFunction = ():void => {},
}: FormContainer ): JSX.Element => {

  const nameOfForm = useSelector(( state: RootState ) => state.form.formName );

  const someFieldFill = ( ...args: any[]): boolean => _some( args, ( field ) => !_isEmpty( field ));

  /* ToDo use constants instead of hardcoded strings */
  const handleSubmit = useCallback(( event ) => {
    const data = new FormData( event.target );
    const fromInput = data.get( 'check_is_not_robot' );

    if ( _isEmpty( fromInput )) {
      alert( 'Wpisz nazwę formularza we właściwym miejscu' );
    } else if ( !_isEqual( fromInput, nameOfForm )) {
      alert( 'Wpisz poprawną nazwę formularza' );
    } else {
      if ( someFieldFill( data.get( 'name_male' ), data.get( 'name_female' ))) {
        onSubmit( data.get( 'name_male' ) as string, data.get( 'name_female' ) as string );
      } else {
        alert( 'Wpisz wartość w pola formularza. Wystarczy jedno pole!' );
      }
    }
  }, [ nameOfForm, onSubmit ]);

  return (
    <FormView
      preview={ preview }
      onSubmit={ handleSubmit }
      additionalFunction={ additionalFunction }
    />
  );
};

export default Form;
