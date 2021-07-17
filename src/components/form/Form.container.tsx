import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';

import { RootState } from 'store/reducers/rootReducer';
import useLocaleString from 'hooks/useLocaleString';

import FormView from './Form.view';
import { FormContainer, IGuestValues } from './Form.types';

// ToDo: #167
const Form = ({
  preview = false,
  onSubmit = (): void => {},
  additionalFunction = (): void => {},
}: FormContainer ): JSX.Element => {
  const methods = useForm<IGuestValues>();
  const getString = useLocaleString();
  const nameOfForm = useSelector(( state: RootState ) => state.form.name );

  const someFieldFill = ( ...fields: string[]): boolean => _some( fields, ( field ) => !_isEmpty( field ));

  const handleSubmit = useCallback(({
    nameMale,
    nameFemale,
    checkIsNotRobot,
  }) => {
    if ( _isEmpty( checkIsNotRobot )) {
      alert( getString( 'formErrorEmptyFormName' ));
    } else if ( !_isEqual( checkIsNotRobot, nameOfForm )) {
      alert( getString( 'formErrorWrongFormName' ));
    } else {
      if ( someFieldFill( nameMale, nameFemale )) {
        onSubmit( nameMale, nameFemale );
        methods.reset();
      } else {
        alert( getString( 'formErrorEmptyFormFields' ));
      }
    }
  }, [
    nameOfForm,
    onSubmit,
    getString,
    methods,
  ]);

  return (
    <FormProvider { ...methods }>
      <FormView
        preview={ preview }
        onSubmit={ handleSubmit }
        additionalFunction={ additionalFunction }
      />
    </FormProvider>
  );
};

export default Form;
