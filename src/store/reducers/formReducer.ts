import {
  SET_FORM_NAME,
  ERROR_FORM_DONT_EXIST,
  CLEAR_FORM,
} from 'store/actions';
import { FormAction, FormState } from 'store/types';

const initialState: FormState = {
  id: '',
  name: '',
  errors: null,
};

const reducer = ( state = initialState, action: FormAction = { type: CLEAR_FORM }): FormState => {
  switch ( action.type ) {
    case SET_FORM_NAME:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        errors: null,
      };
    case ERROR_FORM_DONT_EXIST:
      return {
        ...state,
        name: '',
        id: '',
        errors: action.payload.errorMessage,
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
