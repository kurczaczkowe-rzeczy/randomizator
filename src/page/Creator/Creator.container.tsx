import { useEffect, useState } from 'react';
import { jsonToCSV } from 'react-papaparse';
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux';
import { isEmpty } from 'react-redux-firebase';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import _union from 'lodash/union';
import _isNull from 'lodash/isNull';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import { db, firestore } from 'config/firebaseConfig';
import { Mapping } from 'types';
import prepareLink from 'utils/prepareLink';
import useLocalStorage from 'hooks/useLocalStorage';
import useLocaleString from 'hooks/useLocaleString';
import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';
import { addForm } from 'store/actions/formsActions';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';
import {
  FORM_ID_KEY,
  HOME_PAGE,
  IS_DEVELOPMENT_MODE,
} from 'constans';

import { IOption } from 'components/Select';
import PageContainer from 'components/PageContainer';

import CreatorView from './Creator.view';
import {
  IForm,
  IFormDoc,
  Answers,
} from './Creator.types';
import {
  getFormCollection,
  formsSubscription,
  getNewFileName,
  parseText,
  mapAnswers,
} from './Creator.utils';

// ToDo: issue #150
const Creator = (): JSX.Element => {
  const getString = useLocaleString();

  const [ formID, setFormID ] = useLocalStorage<string>( FORM_ID_KEY );
  const [ link, setLink ] = useState( '' );
  const [ selectedFormId, setSelectedFormId ] = useState( '' );
  const [ acceptedFileNames, setAcceptedFileNames ] = useState<string[]>([]);
  const [ answersFromFile, setAnswersFromFile ] = useState<Answers>([]);

  const auth = useSelector(( state: RootState ) => state.firebase.auth, shallowEqual );
  const answersCounter = useSelector(( state: RootState ) => state.ans.counter );
  const defaultFormId = useSelector(( state: RootState ) => state.form.id );
  const forms = useSelector(( state: RootState ) => state.forms.forms );
  const dispatch = useDispatch();

  const updateFormID = ( forms: IForm[]): void => {
    const found = forms.findIndex(( form: IForm ) => form.id === formID );

    if ( found === -1 && forms.length > 0 ) {
      setFormID( forms[ 0 ].id );
    }
    // ToDo: issue #160
  };

  useEffect(() => {
    if ( !isEmpty( auth )) {
      const subscription = formsSubscription(
        auth.uid,
        ( doc ) => { // ToDo maybe puts this function into const
          const form = {
            name: doc.data()?.name ?? getString( 'noName' ),
            id: doc.id,
          };

          dispatch( addForm( form )); // ToDo we can add all forms at once?
          if ( _isNil( formID )) {
            setFormID( form.id );
          }
        },
        updateFormID,
      );

      return (): void => subscription();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if ( !isEmpty( auth ) && formID !== null ) {
      const subscription = formsSubscription( auth.uid, ( doc ) => {
        const ans = doc.data()?.answers;

        if ( formID === doc.id ) {
          const form = {
            id: doc.id,
            name: doc.data()?.name,
          };

          dispatch( setFormName( form ));
          getData( ans );
        }
      });

      setLink( `/${ auth.uid }/${ formID }` );

      return subscription;
    }
  }, [ formID ]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = ( answers: Answers ): void => {
    const result: Mapping< string[] > = { };

    _forEach( answers, ( answer ) => {
      _forEach( answer.fields, ({ value, fieldName }) => {
        if ( _isNil( result[ fieldName ])) {
          result[ fieldName ] = [];
        }

        result[ fieldName ] = _union( result[ fieldName ], [ value ]);
      });
    });

    dispatch( setAnswers( result, answers.length ));
  };
  const onFormIdChange = ( formID: string ): void => {
    setFormID( formID );
    dispatch( clearDraw());
  };
  const onRandomClick = (): void => {
    dispatch( setDrawResult());
  };
  const onLogout = (): void => {
    dispatch( signOut());
  };

  useEffect(() => {
    const toggleLoader = _isNull( answersCounter ) ? showLoader( 'CREATOR_PAGE' ) : hideLoader( 'CREATOR_PAGE' );

    dispatch( toggleLoader );
  }, [ answersCounter, dispatch ]);

  const onDownloadAnswers = async (): Promise<void> => {
    if ( IS_DEVELOPMENT_MODE && formID ) {
      try {
        const savedForm = await getFormCollection( auth.uid, formID ) as IFormDoc;
        const answersOfForm = mapAnswers( savedForm?.answers );
        const formName = savedForm ? savedForm.name.replaceAll( ' ', '_' ) : getNewFileName();

        /* In database doesn't exist emptyColumn fields that is append in google forms
         and we want to be compatibility with it so we added it to header row */
        answersOfForm[ 0 ] = {
          emptyColumn: '',
          ...answersOfForm[ 0 ],
        };

        const csvContent = `data:text/csv;charset=utf-8,${ jsonToCSV( answersOfForm ) }`;
        const encodedUri = encodeURI( csvContent );
        const link = document.createElement( 'a' );

        link.setAttribute( 'href', encodedUri );
        link.setAttribute( 'download', `${ formName }.csv` );

        link.click();
      } catch ( error: unknown ) { console.error( 'Error!', error ); }
    }
  };
  const onMenuItemClick = ( option: IOption ): void => {
    setSelectedFormId( option.name );
    onFormIdChange( option.id );
  };

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
    if ( !_isEmpty( answersFromFile )) {
      try {
        const docReference = await db.collection( auth.uid ).doc( formID );

        // ToDo move to hook
        await docReference.update({ answers: firestore.FieldValue.arrayUnion( ...answersFromFile ) });
        setAcceptedFileNames([]);
        alert( getString( 'dataSave' )); // ToDo change to snackbar
      } catch ( error: unknown ) { console.log( 'Error!', error ); } // ToDo better error handling
    }
  };

  const selectFormsProps = {
    defaultValue: defaultFormId,
    options: forms,
    onItemClick: onMenuItemClick,
    name: 'forms',
    label: getString( 'activeNameForm' ),
    value: selectedFormId,
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
        answersCounter={ answersCounter }
        fileContainerProps={ fileContainerProps }
        link={ prepareLink( link, HOME_PAGE ) }
        selectFormsProps={ selectFormsProps }
        onDownloadAnswers={ onDownloadAnswers }
        onDrawClick={ onRandomClick }
        onLogout={ onLogout }
      />
    </PageContainer>
  );
};

export default Creator;
