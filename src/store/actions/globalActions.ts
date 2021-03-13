import { SHOW_LOADER, HIDE_LOADER } from 'store/actions';
import { ThunkAction } from 'redux-thunk';
import { GlobalAction } from '../types';
import { IGlobalState } from '../reducers/globalReducer';

export const showLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: SHOW_LOADER });
};

export const hideLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: HIDE_LOADER });
};
