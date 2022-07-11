import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import _isEmpty from 'lodash/isEmpty';
import _first from 'lodash/first';
import _map from 'lodash/map';
import _find from 'lodash/find';

import { FORM_ID_KEY } from 'constans';
import useLocalStorage from 'hooks/useLocalStorage';
import useTypedSelector from 'hooks/useTypedSelector';
import { IOption } from 'components/Select';
import { setSelectedForm } from 'store/actions/formAction';
import { IBaseForm } from 'types';

import FormChooserView from './FormChooser.view';

/**
 * Component initialize subscription to forms and controls in application form context.
 */
const FormChooser = (): JSX.Element => {
  const [ formID, setFormID ] = useLocalStorage<string>( FORM_ID_KEY );
  const creatorId = useTypedSelector(({ firebase: { auth: { uid }}}) => uid );
  const defaultFormID = useTypedSelector(({ form: { id }}) => id );
  const forms = useTypedSelector< IBaseForm[] >(({ firestore: { ordered: { forms }}}) => _map( forms,
    ({ id, name }) => ({ id, name })),
  shallowEqual );
  const dispatch = useDispatch();

  useFirestoreConnect([{ collection: creatorId, storeAs: 'forms' }]);

  const onFormSelect = useCallback(({ id }: Partial< IOption > ): void => {
    const selectedFormID = id ?? '';

    setFormID( selectedFormID );
    dispatch( setSelectedForm( selectedFormID ));
  }, [ dispatch, setFormID ]);

  useEffect(() => {
    if ( !_isEmpty( forms ) && _isEmpty( defaultFormID )) {
      onFormSelect({
        id: _isEmpty( formID ) || !_find( forms, [ 'id', formID ])
          ? _first< IBaseForm >( forms )?.id
          : formID,
      });
    }
  }, [
    defaultFormID,
    formID,
    forms,
    onFormSelect,
    setFormID, // ToDo: check if it is needed here
  ]);

  return (
    <FormChooserView
      creatorID={ creatorId }
      defaultFormID={ defaultFormID }
      formID={ formID }
      forms={ forms }
      onFormSelect={ onFormSelect }
    />
  );
};

export default FormChooser;
