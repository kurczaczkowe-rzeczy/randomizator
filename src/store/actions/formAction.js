import * as actionTypes from 'store/actions';

export const getFormName = ( userID, formID ) =>
  (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    const firestore = getFirestore();

    firestore.collection( userID ).doc( formID )
      .get()
      .then(( doc ) => {
        if ( doc.exists ) {
          dispatch({ type: actionTypes.GET_FORM_NAME, name: doc.data().name });
        } else {
          dispatch({ type: actionTypes.ERROR_FORM_DONT_EXIST, errorMsg: 'Form don\'t exist' });
        }
      });
  };

export const setFormName = ( formName ) => ( dispatch ) => {
  dispatch({ type: actionTypes.GET_FORM_NAME, name: formName });
};
