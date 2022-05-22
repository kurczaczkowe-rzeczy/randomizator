import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import _noop from 'lodash/noop';
import _reduce from 'lodash/reduce';

import useLocaleString from 'hooks/useLocaleString';
import asyncNoop from 'utils/asyncNoop';
import { IField, Mapping } from 'types';

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
  onSubmit = asyncNoop,
  additionalFunction = _noop,
  fields = [],
}: FormContainer ): JSX.Element => {
  const methods = useForm< IGuestValues >();
  const { formState: { isSubmitSuccessful }, reset } = methods;
  const getString = useLocaleString();

  const handleSubmit = useCallback< GuestSubmitHandler >( async ({ checkIsNotRobot, ...fields }) => {
    const message = getErrorMessage(
      checkIsNotRobot,
      name,
      fields,
    );

    if ( message ) {
      /* ToDo: this not work as expect, it should be don second unction to run on invalid values
          and resolver to check validity of form */
      alert( getString( message ));

      return;
    }

    await onSubmit( fields );
  }, [
    name,
    onSubmit,
    getString,
  ]);

  useEffect(() => {
    if ( isSubmitSuccessful ) {
      reset( _reduce< IField, Mapping< string >>(
        fields,
        ( clearedValues, { name }) => ({ ...clearedValues, [ name ]: '' }),
        { checkIsNotRobot: '' },
      ));
    }
  }, [
    isSubmitSuccessful,
    reset,
    fields,
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
