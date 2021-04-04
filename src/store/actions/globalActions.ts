import { ThunkAction } from 'redux-thunk';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_GLOBAL,
  HIDE_MODAL,
  SHOW_MODAL,
} from 'store/actions';
import { GlobalAction, IGlobalState } from 'store/types';

export const showLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: SHOW_LOADER });
};

export const hideLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: HIDE_LOADER });
};

export const showModal = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: SHOW_MODAL });
};

export const hideModal = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: HIDE_MODAL });
};

export const clearGlobal = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: CLEAR_GLOBAL });
};
