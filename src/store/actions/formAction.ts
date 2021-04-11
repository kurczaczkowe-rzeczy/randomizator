/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkAction } from 'redux-thunk';
import {
  SET_FORM_NAME,
  ERROR_FORM_DONT_EXIST,
}  from 'store/actions';
import {
  FormAction,
  IForm,
  FormState,
} from 'store/types';

export const fetchFormName = ( userID: string, formID: string ): ThunkAction<void, FormState, any, FormAction> =>
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
            payload: { name: doc.data().name, id: formID },
          });
        } else {
          dispatch({
            type: ERROR_FORM_DONT_EXIST,
            payload: { errorMessage: 'Form don\'t exist' },
          });
        }
      });
  };

export const setFormName = ( formProp: IForm ): ThunkAction<void, FormState, IForm, FormAction> =>
  ( dispatch ): void => {
    dispatch({
      type: SET_FORM_NAME,
      payload: formProp,
    });
  };
