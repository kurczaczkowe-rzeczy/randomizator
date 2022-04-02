import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import _isEqual from 'lodash/isEqual';

import { RootState } from 'store/reducers/rootReducer';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';

import { getErrorMessage } from './Form.utils';
import FormView from './Form.view';
import {
  FormContainer,
  GuestSubmitHandler,
  IGuestValues,
} from './Form.types';

// ToDo: #167
const Form = ({
  preview = false,
  onSubmit = (): void => {},
  additionalFunction = (): void => {},
}: FormContainer ): JSX.Element => {
  const methods = useForm< IGuestValues >();
  const getString = useLocaleString();
  const { name, fields } = useTypedSelector(( state: RootState ) => state.form, _isEqual );

  const handleSubmit = useCallback< GuestSubmitHandler >(({ checkIsNotRobot, ...fields }) => {
    const message = getErrorMessage(
      checkIsNotRobot,
      name,
      fields,
    );

    if ( message ) {
      alert( getString( message ));

      return;
    }

    onSubmit( fields );
    methods.reset();
  }, [
    name,
    onSubmit,
    getString,
    methods,
  ]);

  return (
    <FormProvider { ...methods }>
      <FormView
        fields={ fields }
        preview={ preview }
        onSubmit={ handleSubmit }
        additionalFunction={ additionalFunction }
      />
    </FormProvider>
  );
};

export default Form;
