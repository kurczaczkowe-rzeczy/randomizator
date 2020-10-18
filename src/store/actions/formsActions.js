import { ADD_FORM } from 'store/actions';

export const addForm = ( formProp ) => ( dispatch ) => {
  dispatch({ type: ADD_FORM, forms: formProp });
};
