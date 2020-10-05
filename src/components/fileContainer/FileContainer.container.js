import React, { useState } from 'react';
import { useLocation } from 'react-router';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import parseText from 'components/fileContainer/FileContainer.utils';
import { db, firestore } from 'config/firebaseConfig';

import FileContainerView from 'components/fileContainer/FileContainer.view';

const FileContainer = () => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  const [ acceptedFile, setAcceptedFile ] = useState([]);

  const removeFile = () => {
    setAcceptedFile([]);
  };

  const [ answers, setAnswers ] = useState([]);

  const sendFile = () => {
    console.log( answers );
    if ( !_isEmpty( answers )) {
      db.collection( pathArray[ 2 ])
        .doc( 'uIoLWxSTnXqdZJuzNi5v' )
        .update({ answers: firestore.FieldValue.arrayUnion( ...answers ) })
        .then(() => alert( 'Dane zostały zapisane' ))
        .catch(( error ) => console.log( 'Error!', error ));
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

  return (
    <FileContainerView
      onDropAccepted={ onDropAccepted }
      acceptedFile={ acceptedFile }
      onRemove={ removeFile }
      onSend={ sendFile }
    />
  );
};

FileContainer.propTypes = {};

FileContainer.defaultProps = {};

export default FileContainer;
