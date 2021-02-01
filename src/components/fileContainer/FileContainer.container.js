import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import { db, firestore } from 'config/firebaseConfig';

import parseText from './FileContainer.utils';
import FileContainerView from './FileContainer.view';

const FileContainer = ({ formID }) => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );

  const [ acceptedFile, setAcceptedFile ] = useState([]);

  const removeFile = () => {
    setAcceptedFile([]);
  };

  const [ answers, setAnswers ] = useState([]);

  const sendFile = () => {
    console.log( formID ); // FixMe please
    if ( !_isEmpty( answers )) {
      db.collection( pathArray[ 2 ])
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

FileContainer.propTypes = { formID: PropTypes.string };

FileContainer.defaultProps = { formID: '' };

const mapStateToProps = ( state ) => ({ formID: state.form.docID });

export default connect( mapStateToProps )( FileContainer );
