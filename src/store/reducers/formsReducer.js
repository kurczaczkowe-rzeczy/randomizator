import _unionWith from 'lodash/unionWith';
import _isEqual from 'lodash/isEqual';

import { ADD_FORM } from 'store/actions';

const initState = {
  forms: [],
  errors: null,
};

const reducer = ( state = initState, action = {}) => {
  switch ( action.type ) {
    case ADD_FORM:
      return {
        ...state,
        forms: _unionWith(
          state.forms,
          [ action.forms ],
          _isEqual,
        ),
        errors: null,
      };
    default:
      return state;
  }
};

export default reducer;
