import {
  HIDE_LOADER,
  SHOW_LOADER,
  CLEAR_GLOBAL,
} from '../actions';
import { GlobalAction } from '../types';

export interface IGlobalState{
  isLoading: boolean;
}

const initialState: IGlobalState = { isLoading: false };
const initialAction: GlobalAction = { type: CLEAR_GLOBAL };

const reducer = ( state = initialState, action = initialAction ): IGlobalState => {
  switch ( action.type ) {
    case SHOW_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case HIDE_LOADER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case CLEAR_GLOBAL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
