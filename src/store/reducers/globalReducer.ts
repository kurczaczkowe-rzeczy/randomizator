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

const reducer = ( state = initialState, action: GlobalAction = { type: CLEAR_GLOBAL }): IGlobalState => {
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
    default: {
      return state;
    }
  }
};

export default reducer;
