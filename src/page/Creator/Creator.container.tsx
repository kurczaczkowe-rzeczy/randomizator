import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import _isNull from 'lodash/isNull';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';

import useAnswerBatch from 'hooks/useAnswerBatch';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { clearDraw } from 'store/actions/drawAction';
import { downloadAnswersCSV } from 'store/actions/answersAction';
import { signOut } from 'store/actions/authAction';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { CARDS, PAGES } from 'constans';

import PageContainer from 'components/PageContainer';
import { AnswersFields } from 'types';

import CreatorView from './Creator.view';
import { parseText } from './Creator.utils';

// ToDo: issue #150
const Creator = (): JSX.Element => {
  const getString = useLocaleString();

  const previousAnswersCount = useRef< number | null >( null );

  const [ acceptedFileNames, setAcceptedFileNames ] = useState< string[] >([]);
  const [ answersFromFile, setAnswersFromFile ] = useState< AnswersFields >([]);

  const auth = useTypedSelector(({ firebase: { auth }}) => auth, shallowEqual );
  const formID = useTypedSelector(({ form: { id }}) => id );
  const selectedForm = useTypedSelector(({ firestore: { data }}) => data.forms?.[ formID ] ?? {}, _isEqual );
  const dispatch = useDispatch();

  const { addAnswers } = useAnswerBatch( auth.uid, formID );

  const onLogout = (): void => {
    dispatch( signOut());
  };

  useEffect(() => {
    if ( !previousAnswersCount.current ) {
      const toggleLoader = _isNull( selectedForm.counter ) ? showLoader( PAGES.CREATOR ) : hideLoader( PAGES.CREATOR );

      previousAnswersCount.current = selectedForm.counter;

      dispatch( toggleLoader );
    }
  }, [ selectedForm.counter, dispatch ]);

  useEffect(() => {
    if ( !_isEmpty( formID )) { dispatch( clearDraw()); }
  }, [ formID, dispatch ]);

  const onDownloadAnswers = (): void => { dispatch( downloadAnswersCSV()); };

  const onDropAccepted = ( acceptedFiles: File[]): void => {
    dispatch( showLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
    setAcceptedFileNames( _map( acceptedFiles, ( file ) => file.name ));

    const reader = new FileReader();

    // ToDo: handle all cases and errors in FileReader, @see https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    reader.onload = (): void => {
      const { result } = reader;

      if ( typeof result === 'string' ) {
        // ToDo: handle check if uploaded file has compatible answers to selected form
        setAnswersFromFile( parseText( result ));
      } else {
        console.error( 'TypeError: Incompatible type of FileReader result ->', {
          resultType: typeof result,
          result,
        });
      }

      dispatch( hideLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
    };

    reader.readAsText( acceptedFiles[ 0 ]);
  };
  const onDropRejected = (): void => {
    // ToDo: extend handling errors
    alert( getString( 'errorOnlyCSVAccepted' )); // ToDo change to snackbar
  };
  const onRemove = (): void => { setAcceptedFileNames([]); };
  const onSend = async (): Promise< void > => {
    if ( !_isEmpty( answersFromFile )) {
      dispatch( showLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
      await addAnswers(
        answersFromFile,
        () => {
          alert( getString( 'dataSave' )); // ToDo change to snackbar
          setAcceptedFileNames([]);
          dispatch( hideLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
        },
        () => {
          alert( getString( 'sendingAnswersError' ));
          dispatch( hideLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
        },
      );
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
