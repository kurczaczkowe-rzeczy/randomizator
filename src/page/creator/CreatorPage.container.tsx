import { useEffect, useState } from 'react';
import { jsonToCSV } from 'react-papaparse';
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import _union from 'lodash/union';
import _isNull from 'lodash/isNull';

import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';
import { addForm } from 'store/actions/formsActions';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';
import { FORM_ID_KEY, HOME_PAGE } from 'constans';

import CreatorView from './CreatorPage.view';
import {
  IForm,
  IAnswers,
  IAnswersStore,
} from './CreatorPage.types';
import {
  fomCollection,
  formsSubscription,
  getNewFileName,
} from './CreatorPage.utils';

const Creator = (): JSX.Element => {
  const [ formID, setFormID ] = useState( localStorage.getItem( FORM_ID_KEY )); // ToDo create localstorage hook
  const [ link, setLink ] = useState( '' );

  const auth = useSelector(( state: RootState ) => state?.firebase.auth, shallowEqual );
  const answersCounter = useSelector(( state: RootState ) => state?.ans.counter );
  const dispatch = useDispatch();

  const updateFormID = ( forms: IForm[]): void => {
    const found = forms.findIndex(( form: IForm ) => form.id === formID );

    if ( found === -1 ) {
      localStorage.setItem( FORM_ID_KEY, forms[ 0 ].id );
      setFormID( forms[ 0 ].id );
    }
  };

  useEffect(() => {
    if ( auth ) {
      const subscription = formsSubscription(
        auth.uid,
        ( doc ) => { // ToDo maybe puts this function into const
          const form = {
            name: doc.data()?.name,
            id: doc.id,
          };

          dispatch( addForm( form )); // ToDo we can add all forms at once?
          if ( _isNil( formID )) {
            localStorage.setItem( FORM_ID_KEY, form.id );
            setFormID( form.id );
          }
        },
        updateFormID,
      );

      return (): void => subscription();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( auth && formID !== null ) {
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

      setLink( `${ HOME_PAGE }/${ auth.uid }/${ formID }` );

      return (): void => subscription();
    }
  }, [ formID ]); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = ( answers: IAnswers[]): void => {
    const result: IAnswersStore = { };

    _forEach( answers, ( answer ) => {
      _forEach( answer, ( value, key ) => {
        if ( _isNil( result[ key ])) {
          result[ key ] = [];
        }

        result[ key ] = _union( result[ key ], [ value ]);
      });
    });

    dispatch( setAnswers( result, answers.length ));
  };

  const onFormIdChange = ( formID: string ): void => {
    setFormID( formID );
    localStorage.setItem( FORM_ID_KEY, formID );
    dispatch( clearDraw());
  };

  const onRandomClick = (): void => {
    dispatch( setDrawResult());
  };

  const onLogout = (): void => {
    dispatch( signOut());
  };

  useEffect(() => {
    if ( _isNull( answersCounter )) {
      dispatch( showLoader( 'CREATOR_PAGE' ));
    } else {
      dispatch( hideLoader( 'CREATOR_PAGE' ));
    }
  }, [ answersCounter, dispatch ]);

  const getAnswersToFile = async () => {
    if ( formID ) {
      const savedForm = await fomCollection( auth.uid, formID );
      const answersOfForm = savedForm?.answers;
      const formName = savedForm ? savedForm.name.replaceAll( ' ', '_' ) : getNewFileName();

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
    }
  };

  return (
    <CreatorView
      answersCounter={ answersCounter }
      link={ link }
      onRandomClick={ onRandomClick }
      logout={ onLogout }
      onFormIdChange={ ( formID ): void => onFormIdChange( formID ) }
      getAnswersToFile={ getAnswersToFile }
    />
  );
};

export default Creator;
