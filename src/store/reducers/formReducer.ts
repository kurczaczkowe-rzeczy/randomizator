import {
  CLEAR_FORM,
  ERROR_FORM,
  SET_FORM_NAME,
  SET_SELECTED_FORM,
} from 'store/actions';
import { FormAction, IFormState } from 'store/types';

const initialState: IFormState = {
  fields: [],
  id: '',
  name: '',
  errors: null,
};

const reducer = ( state = initialState, action: FormAction = { type: CLEAR_FORM }): IFormState => {
  switch ( action.type ) {
    case CLEAR_FORM:
      return initialState;
    case SET_FORM_NAME:
      return {
        ...state,
        ...action.payload,
        errors: null,
      };
    case ERROR_FORM:
      return {
        ...state,
        name: '',
        id: '',
        errors: action.payload.errorMessage,
      };
    case SET_SELECTED_FORM:
      return {
        ...state,
        ...action.payload,
        errors: null,
      };
    default:
      return state;
  }
};

export default reducer;
