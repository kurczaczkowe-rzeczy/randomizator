/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import {
  SET_FORM_NAME,
  ERROR_FORM_DONT_EXIST,
  SET_SELECTED_FORM,
} from 'store/actions';
import {
  FormAction,
  IFormState,
  IRootState,
} from 'store/types';
import { IForm } from 'types';

export const fetchFormName = ( userID: string, formID: string ): ThunkAction<void, IFormState, any, FormAction> =>
  (
    dispatch,
    _,
    { getFirestore },
  ): void => {
    const firestore = getFirestore();

    // ToDo consider whether it makes sense to create a hook/util for a firebase
    firestore.collection( userID ).doc( formID )
      .get()
      .then(( doc: any ) => {
        if ( doc.exists ) {
          dispatch({
            type: SET_FORM_NAME,
            payload: {
              name: doc.data().name,
              id: formID,
              fields: [],
            },
          });
        } else {
          dispatch({
            type: ERROR_FORM_DONT_EXIST,
            payload: { errorMessage: 'Form don\'t exist' },
          });
        }
      });
  };

export const setSelectedForm = ( formID: IForm[ 'id' ]): ThunkAction<void, IRootState, unknown, FormAction> =>
  ( dispatch, getState ): void => {
    const form = getState().firestore.data.forms[ formID ];

    dispatch({
      type: SET_SELECTED_FORM,
      payload: { id: formID, ...form },
    });
  };
