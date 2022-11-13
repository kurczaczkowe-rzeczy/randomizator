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
import useLocalize from 'hooks/useLocalize';
import useTypedSelector from 'hooks/useTypedSelector';
import { signOut } from 'store/actions/authAction';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { CARDS, PAGES } from 'constans';

import PageContainer from 'components/PageContainer';
import { AnswersFields } from 'types';

import CreatorView from './Creator.view';
import { IParsedAnswerFile, parseAnswerFile } from './Creator.utils';

const initFileData = { answers: [], shouldDisplayError: false };

// ToDo: issue #150
const Creator = (): JSX.Element => {
  const localize = useLocalize();

  const previousAnswersCount = useRef< number | null >( null );

  const [ answersFileData, setAnswersFileData ] = useState< IParsedAnswerFile >( initFileData );

  const auth = useTypedSelector(({ firebase: { auth }}) => auth, shallowEqual );
  const { id: formID, fields } = useTypedSelector(({ form }) => form, shallowEqual );
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

  const onDropAccepted = ( acceptedFiles: File[]): void => {
    if ( !acceptedFiles.length ) { return; }

    dispatch( showLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));

    const reader = new FileReader();

    // ToDo: handle all cases and errors in FileReader, @see https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    reader.onload = (): void => {
      const { result } = reader;

      if ( typeof result === 'string' ) {
        setAnswersFileData( parseAnswerFile( result, fields, acceptedFiles[ 0 ].name ));
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
    alert( localize( 'errorOnlyCSVAccepted' )); // ToDo change to snackbar
  };
  const onRemove = (): void => { setAnswersFileData( initFileData ); };
  const onSend = async (): Promise< void > => {
    // ToDo: change to custom dialog
    if ( _isEmpty( answersFileData.answers )
      || ( answersFileData.shouldDisplayError && !window.confirm( localize( 'someFieldNamesNotFoundConfirmation' )))
    ) {
      return;
    }

    dispatch( showLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
    await addAnswers(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      answersFileData.answers,
      () => {
        alert( localize( 'dataSave' )); // ToDo change to snackbar
        setAnswersFileData( initFileData );
        dispatch( hideLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
      },
      () => {
        alert( localize( 'sendingAnswersError' ));
        dispatch( hideLoader( PAGES.CREATOR, CARDS.FILE_DROPZONE ));
      },
    );
  };

  const fileContainerProps = {
    fileName: answersFileData.fileName,
    shouldDisplayError: answersFileData.shouldDisplayError,
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
        onLogout={ onLogout }
      />
    </PageContainer>
  );
};

export default Creator;
