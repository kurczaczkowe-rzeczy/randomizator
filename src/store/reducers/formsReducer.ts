import _unionWith from 'lodash/unionWith';
import _isEqual from 'lodash/isEqual';

import { ADD_FORM, CLEAR_FORMS } from 'store/actions';
import { FormsAction, IFormsState } from 'store/types';

const initialState: IFormsState = {
  forms: [],
  errors: null,
};
const initialAction: FormsAction = { type: CLEAR_FORMS };

const reducer = ( state = initialState, action = initialAction ): IFormsState => {
  switch ( action.type ) {
    case ADD_FORM:
      return {
        ...state,
        forms: _unionWith(
          state.forms,
          [ action.payload ],
          _isEqual,
        ) as IFormsState['forms'],
        errors: null,
      };
    case CLEAR_FORMS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
