import { ThunkAction } from 'redux-thunk';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_GLOBAL,
  HIDE_MODAL,
  SHOW_MODAL,
  FORCE_HIDE_LOADER,
} from 'store/actions';
import {
  GlobalAction,
  IGlobalActionsPayloads,
  IGlobalState,
} from 'store/types';

type LoaderAction = ( callFrom: IGlobalActionsPayloads[ 'callFrom' ]) =>
  ThunkAction<void, IGlobalState, unknown, GlobalAction>;

export const showLoader: LoaderAction = ( callFrom ) => ( dispatch ) => {
  dispatch({ type: SHOW_LOADER, payload: { callFrom }});
};

export const hideLoader: LoaderAction = ( callFrom ) => ( dispatch ) => {
  dispatch({ type: HIDE_LOADER, payload: { callFrom }});
};

export const forceHideLoader = (): ThunkAction<void, IGlobalState, unknown, GlobalAction> => ( dispatch ): void => {
  dispatch({ type: FORCE_HIDE_LOADER });
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
