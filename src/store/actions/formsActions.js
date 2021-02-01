import { ADD_FORM } from 'store/actions';

// ToDo change name formProp
export const addForm = ( formProp ) => ( dispatch ) => {
  dispatch({ type: ADD_FORM, forms: formProp });
};
