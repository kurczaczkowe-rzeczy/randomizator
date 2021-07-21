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

type LoaderAction = (
  callFrom: IGlobalActionsPayloads[ 'callFrom' ],
  bindToCard?: IGlobalActionsPayloads[ 'bindToCard' ],
) =>
  ThunkAction<void, IGlobalState, unknown, GlobalAction>;

/**
 * Action shows loader on specific page. If specified bindToCard param shows loader only in specific card.
 *
 * @param callFrom - page on that call this action
 * @param bindToCard - card on that call this action
 */
export const showLoader: LoaderAction = ( callFrom, bindToCard = 'none' ) => ( dispatch ) => {
  dispatch({ type: SHOW_LOADER, payload: { callFrom, bindToCard }});
};

/**
 * Action hide loader from specific page. If specified bindToCard param hide loader only from specific card.
 *
 * @param callFrom - page on that call this action
 * @param bindToCard - card on that call this action
 */
export const hideLoader: LoaderAction = ( callFrom, bindToCard = 'none' ) => ( dispatch ) => {
  dispatch({ type: HIDE_LOADER, payload: { callFrom, bindToCard }});
};

/** Action force hide loader. If you call this action any loader that shows should hide immediately. */
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
