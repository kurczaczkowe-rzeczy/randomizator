import { ADD_FORM } from 'store/actions';
import _get from 'lodash/get';

export const addForm = ( formProp ) => ( dispatch, getState ) => {
  const formsFromState = _get(
    getState(), 'forms.forms', [],
  );

  console.debug( formProp );

  if ( formsFromState && !formsFromState.find(( form ) => form.id === formProp.id )) {
    formsFromState.push( formProp );
    dispatch({ type: ADD_FORM, forms: formsFromState });
  }
};
