/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExtendedFirestoreInstance } from 'react-redux-firebase';
import { ThunkAction } from 'redux-thunk';
import {
  SET_FORM_NAME,
  ERROR_FORM,
  SET_SELECTED_FORM,
  CLEAR_FORM,
} from 'store/actions';
import {
  FormAction,
  IRootState,
} from 'store/types';
import { IForm } from 'types';

type ActionCreator = ( userID: string, formID: string ) =>
  ThunkAction<Promise< void > | void, IRootState, { getFirestore: () => ExtendedFirestoreInstance }, FormAction>;

export const fetchFormName: ActionCreator = ( userID, formID ) =>
  async (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    const { id } = getState().form;

    if ( id === formID ) { return; }

    const firestore = getFirestore();

    try {
      const doc = await firestore.get< IForm >( `${ userID }/${ formID }` );

      if ( doc.exists ) {
        const { name, fields } = doc.data() ?? {};

        dispatch({
          type: SET_FORM_NAME,
          payload: {
            name,
            id: formID,
            fields,
          },
        } as FormAction );
      } else {
        dispatch({
          type: ERROR_FORM,
          payload: { errorMessage: 'Form don\'t exist' },
        });
      }
    } catch ( e: unknown ) {
      // ToDo: Better error handling
      console.error( 'Form name fetch:', e );
      dispatch({
        type: ERROR_FORM,
        payload: { errorMessage: 'Unknown error occurrence' },
      });
    }
  };

/** Action trigger select specific form from firestore. */
export const setSelectedForm = ( formID: IForm[ 'id' ]): ThunkAction<void, IRootState, unknown, FormAction> =>
  ( dispatch, getState ) => {
    const form = getState().firestore.data.forms[ formID ];

    dispatch({
      type: SET_SELECTED_FORM,
      payload: { id: formID, ...form },
    });
  };

/** Action trigger cleaning form store. */
export const clearForm = (): ThunkAction<void, IRootState, unknown, FormAction> => ( dispatch ) => {
  dispatch({ type: CLEAR_FORM });
};
