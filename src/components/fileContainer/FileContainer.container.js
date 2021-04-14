import { useState } from 'react';
import { useSelector } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import { db, firestore } from 'config/firebaseConfig';

import parseText from './FileContainer.utils';
import FileContainerView from './FileContainer.view';

const FileContainer = () => {
  const auth = useSelector(( state ) => state?.firebase.auth );
  const formID = useSelector(( state ) => state.form.id );
  const [ acceptedFile, setAcceptedFile ] = useState([]);

  const removeFile = () => {
    setAcceptedFile([]);
  };

  const [ answers, setAnswers ] = useState([]);

  const sendFile = () => {
    if ( !_isEmpty( answers )) {
      db.collection( auth.uid )
        .doc( formID )
        .update({ answers: firestore.FieldValue.arrayUnion( ...answers ) }) // ToDo move to hook
        .then(() => {
          setAcceptedFile([]);
          alert( 'Dane zostały zapisane' ); // ToDo change to snackbar
        })
        .catch(( error ) => console.log( 'Error!', error )); // ToDo better error handling
    }
  };

  const onDropAccepted = ( acceptedFiles ) => {
    setAcceptedFile( _map( acceptedFiles, ( file ) => file.name ));

    const reader = new FileReader();

    reader.onload = () => {
      setAnswers( parseText( reader.result ));
    };

    reader.readAsText( acceptedFiles[ 0 ]);
  };

  const onDropRejected = () => {
    alert( 'Taki plik nie jest akceptowany. Prosze podać plik z rozszerzeniem CSV' ); // ToDo change to snackbar
  };

  return (
    <FileContainerView
      acceptedFile={ acceptedFile }
      onDropAccepted={ onDropAccepted }
      onDropRejected={ onDropRejected }
      onRemove={ removeFile }
      onSend={ sendFile }
    />
  );
};

export default FileContainer;
