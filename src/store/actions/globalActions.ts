import { ThunkAction } from 'redux-thunk';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_GLOBAL,
} from 'store/actions';
import { GlobalAction, IGlobalState } from 'store/types';

export const showLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: SHOW_LOADER });
};

export const hideLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: HIDE_LOADER });
};

export const clearGlobal = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: CLEAR_GLOBAL });
};
