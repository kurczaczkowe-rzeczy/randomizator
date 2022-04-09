import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import noop from 'lodash/noop';

import useLocaleString from 'hooks/useLocaleString';

import { getErrorMessage } from './Form.utils';
import FormView from './Form.view';
import {
  FormContainer,
  GuestSubmitHandler,
  IGuestValues,
} from './Form.types';

// ToDo: #167
const Form = ({
  name,
  preview = false,
  onSubmit = noop,
  additionalFunction = noop,
  fields = [],
}: FormContainer ): JSX.Element => {
  const methods = useForm< IGuestValues >();
  const getString = useLocaleString();

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
