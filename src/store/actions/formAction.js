import {
  GET_FORM_NAME,
  ERROR_FORM_DONT_EXIST,
}  from 'store/actions';

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
          dispatch({ type: GET_FORM_NAME, name: doc.data().name });
        } else {
          dispatch({ type: ERROR_FORM_DONT_EXIST, errorMsg: 'Form don\'t exist' });
        }
      });
  };

export const setFormName = ( formName ) => ( dispatch ) => {
  dispatch({ type: GET_FORM_NAME, name: formName });
};
