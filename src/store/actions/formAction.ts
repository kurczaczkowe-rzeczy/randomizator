import {
  SET_FORM_NAME,
  ERROR_FORM,
  SET_SELECTED_FORM,
  CLEAR_FORM,
  CLEAR_FIRESTORE_ANSWERS,
} from 'store/actions';
import {
  ActionCreator,
  FirestoreAction,
  FormAction,
} from 'store/types';
import { IForm } from 'types';

type FormActionCreator< PayloadArgs extends unknown[] = []> =
  ActionCreator< FormAction | FirestoreAction, PayloadArgs >;

// ToDo: Focus on this func, it could be rewrite or deleted and instead of using them use setSelectedForm
export const fetchFormName: FormActionCreator<[ userID: string, formID: IForm[ 'id' ] ]> = ( userID, formID ) =>
  async (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    const { id } = getState().form;

    if ( id === formID ) { return; }

    const firestore = getFirestore();

    try {
      const doc = await firestore.get( `${ userID }/${ formID }` );

      if ( doc.exists ) {
        dispatch({
          type: SET_FORM_NAME,
          payload: { id: formID },
        });
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
export const setSelectedForm: FormActionCreator<[ formID: IForm[ 'id' ]]> = ( formID ) => ( dispatch, getState ) => {
  const form = getState().firestore.data.forms[ formID ];

  dispatch({ type: CLEAR_FIRESTORE_ANSWERS });
  dispatch({ type: SET_SELECTED_FORM, payload: { id: formID, ...form }});
};

/** Action trigger cleaning form store. */
export const clearForm: FormActionCreator = () => ( dispatch ) => { dispatch({ type: CLEAR_FORM }); };
