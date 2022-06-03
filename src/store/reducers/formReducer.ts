import {
  CLEAR_FORM,
  ERROR_FORM,
  SET_FORM_NAME,
  SET_SELECTED_FORM,
} from 'store/actions';
import { FormAction, IFormState } from 'store/types';

const initialState: IFormState = {
  id: '',
  errors: null,
  name: '',
  fields: [],
  counter: 0,
};

const reducer = ( state = initialState, action: FormAction = { type: CLEAR_FORM }): IFormState => {
  switch ( action.type ) {
    case CLEAR_FORM:
      return initialState;
    case SET_SELECTED_FORM:
    case SET_FORM_NAME:
      return {
        ...state,
        ...action.payload,
        errors: null,
      };
    case ERROR_FORM:
      return {
        ...state,
        ...initialState,
        errors: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
