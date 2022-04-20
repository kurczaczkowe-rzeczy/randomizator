import {
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_GLOBAL,
  HIDE_MODAL,
  SHOW_MODAL,
  FORCE_HIDE_LOADER,
} from 'store/actions';
import {
  ActionCreator,
  GlobalAction,
  IGlobalActionsPayloads,
} from 'store/types';

type GlobalActionCreator< PayloadArgs extends unknown[] = []> = ActionCreator< GlobalAction, PayloadArgs >;

type LoaderActionCreator = GlobalActionCreator<[
  callFrom: IGlobalActionsPayloads[ 'callFrom' ],
  bindToCard?: IGlobalActionsPayloads[ 'bindToCard' ],
]>;

/**
 * Action shows loader on specific page. If specified bindToCard param shows loader only in specific card.
 *
 * @param callFrom - page on that call this action
 * @param bindToCard - card on that call this action
 */
export const showLoader: LoaderActionCreator = ( callFrom, bindToCard ) =>
  ( dispatch ) => { dispatch({ type: SHOW_LOADER, payload: { callFrom, bindToCard }}); };

/**
 * Action hide loader from specific page. If specified bindToCard param hide loader only from specific card.
 *
 * @param callFrom - page on that call this action
 * @param bindToCard - card on that call this action
 */
export const hideLoader: LoaderActionCreator = ( callFrom, bindToCard ) =>
  ( dispatch ) => { dispatch({ type: HIDE_LOADER, payload: { callFrom, bindToCard }}); };

/** Action force hide loader. If you call this action any loader that shows should hide immediately. */
export const forceHideLoader: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: FORCE_HIDE_LOADER }); };

export const showModal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: SHOW_MODAL }); };

export const hideModal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: HIDE_MODAL }); };

export const clearGlobal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: CLEAR_GLOBAL }); };
