import {
  GET_FORM_NAME,
  ERROR_FORM_DONT_EXIST,
}  from 'store/actions';

export const getFormName = ( userID, formID ) => // ToDo change function name
  (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    const firestore = getFirestore();

    // ToDo consider whether it makes sense to create a hook/util for a firebase
    firestore.collection( userID ).doc( formID )
      .get()
      .then(( doc ) => {
        if ( doc.exists ) {
          dispatch({ type: GET_FORM_NAME, name: doc.data().name }); // ToDo change action name
        } else {
          dispatch({ type: ERROR_FORM_DONT_EXIST, errorMsg: 'Form don\'t exist' });
        }
      });
  };

export const setFormName = ( formName, docID ) => ( dispatch ) => {
  dispatch({
    type: GET_FORM_NAME, name: formName, docID, // ToDo change action name
  });
};
