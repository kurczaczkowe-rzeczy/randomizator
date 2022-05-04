import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import _isNull from 'lodash/isNull';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';

import { db, firestore } from 'config/firebaseConfig';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { clearDraw } from 'store/actions/drawAction';
import { downloadAnswersCSV } from 'store/actions/answersAction';
import { signOut } from 'store/actions/authAction';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { PAGES } from 'constans';

import PageContainer from 'components/PageContainer';

import CreatorView from './Creator.view';
import { Answers } from './Creator.types';
import { parseText } from './Creator.utils';

// ToDo: issue #150
const Creator = (): JSX.Element => {
  const getString = useLocaleString();

  const [ acceptedFileNames, setAcceptedFileNames ] = useState<string[]>([]);
  const [ answersFromFile, setAnswersFromFile ] = useState<Answers>([]);

  const auth = useTypedSelector(({ firebase: { auth }}) => auth, shallowEqual );
  const formID = useTypedSelector(({ form: { id }}) => id );
  const selectedForm = useTypedSelector(({ firestore: { data }}) => data.forms?.[ formID ] ?? {}, _isEqual );
  const dispatch = useDispatch();

  const onLogout = (): void => {
    dispatch( signOut());
  };

  useEffect(() => {
    const toggleLoader = _isNull( selectedForm.counter ) ? showLoader( PAGES.CREATOR ) : hideLoader( PAGES.CREATOR );

    dispatch( toggleLoader );
  }, [ selectedForm.counter, dispatch ]);

  useEffect(() => {
    if ( !_isEmpty( formID )) { dispatch( clearDraw()); }
  }, [ formID, dispatch ]);

  const onDownloadAnswers = (): void => { dispatch( downloadAnswersCSV()); };

  const onDropAccepted = ( acceptedFiles: File[]): void => {
    setAcceptedFileNames( _map( acceptedFiles, ( file ) => file.name ));

    const reader = new FileReader();

    reader.onload = (): void => {
      const { result } = reader;

      if ( typeof result === 'string' ) {
        setAnswersFromFile( parseText( result ));
      } else {
        console.error( 'TypeError: CreatorPageContainer.onDropAccepted.reader.onload ->', {
          resultType: typeof result,
          result,
        });
      }
    };

    reader.readAsText( acceptedFiles[ 0 ]);
  };
  const onDropRejected = (): void => { alert( getString( 'errorOnlyCSVAccepted' )); }; // ToDo change to snackbar
  const onRemove = (): void => { setAcceptedFileNames([]); };
  const onSend = async (): Promise<void> => {
    const _formID = 'kolejny';

    if ( !_isEmpty( answersFromFile )) {
      try {
        const docReference = await db.collection( auth.uid ).doc( _formID );

        // ToDo move to hook
        await docReference.update({ answers: firestore.FieldValue.arrayUnion( ...answersFromFile ) });
        setAcceptedFileNames([]);
        alert( getString( 'dataSave' )); // ToDo change to snackbar
      } catch ( error: unknown ) { console.log( 'Error!', error ); } // ToDo better error handling, issue #160
    }
  };

  const fileContainerProps = {
    acceptedFileNames,
    onDropAccepted,
    onDropRejected,
    onRemove,
    onSend,
  };

  return (
    <PageContainer>
      <CreatorView
        selectedForm={ selectedForm }
        fileContainerProps={ fileContainerProps }
        onDownloadAnswers={ onDownloadAnswers }
        onLogout={ onLogout }
      />
    </PageContainer>
  );
};

export default Creator;
