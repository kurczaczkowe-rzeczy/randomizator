import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';

import {
  SHOW_LOADER,
  HIDE_LOADER,
  CLEAR_GLOBAL,
  HIDE_MODAL,
  SHOW_MODAL,
  FORCE_HIDE_LOADER,
  SET_BLOCK_NAVIGATION_CB,
  BLOCK_NAVIGATION_CB,
  CLEAR_FIRESTORE_ANSWERS,
} from 'store/actions';
import {
  ActionCreator,
  FirestoreAction,
  GlobalAction,
  IGlobalState,
  ILoaderPayload,
} from 'store/types';

type GlobalActionCreator< PayloadArgs extends unknown[] = []> = ActionCreator< GlobalAction, PayloadArgs >;

type LoaderActionCreator = GlobalActionCreator<[
  callFrom: ILoaderPayload[ 'callFrom' ],
  bindToCard?: ILoaderPayload[ 'bindToCard' ],
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

/**
 * Action show modal with information about new host.
 * ToDo: change this to global showing modal with provided modal content
 */
export const showModal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: SHOW_MODAL }); };

/**
 * Action hide modal with information about new host.
 * ToDo: change this to global hiding modal with provided modal name
 */
export const hideModal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: HIDE_MODAL }); };

/** Clears global store. */
export const clearGlobal: GlobalActionCreator = () => ( dispatch ) => { dispatch({ type: CLEAR_GLOBAL }); };

/**
 *  Action trigger blocking navigation. If navigation is blocked user get dialog with confirmation to return to page
 *  and save unsaved changes or leave page and discard changes.
 */
export const blockNavigationCb: GlobalActionCreator = () => ( dispatch, getState ) => {
  const { global } = getState();

  if ( !_isEmpty( global.blockNavigationActions )) {
    _forEach( global.blockNavigationActions, ({ type, payload }) => {
      dispatch({ type, payload } as GlobalAction );
    });
  }
  dispatch({ type: BLOCK_NAVIGATION_CB });
};

/**
 * Action trigger save information about prepared action and his payload to store.
 * @param blockNavigationActions - array of types associated with their payloads that will be invoked after confirm
 * dialog.
 */
export const setBlockNavigationCb: GlobalActionCreator<[
  blockNavigationActions: IGlobalState[ 'blockNavigationActions' ],
]> = ( blockNavigationActions ) => ( dispatch ) => {
  dispatch({ type: SET_BLOCK_NAVIGATION_CB, payload: { blockNavigationActions }});
};

/** Action clear answers in firestore store. */
export const clearFirestoreAnswers: ActionCreator< FirestoreAction > = () =>
  ( dispatch ) => { dispatch({ type: CLEAR_FIRESTORE_ANSWERS }); };
