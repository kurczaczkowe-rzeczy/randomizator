import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import _union from 'lodash/union';
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux';

import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';
import { addForm } from 'store/actions/formsActions';
import { RootState } from 'store/reducers/rootReducer';
import { FORM_ID_KEY, HOME_PAGE } from 'constans';

import CreatorView from 'page/creator/CreatorPage.view';
import { formsSubscription } from 'page/creator/CreatorPage.utils';

interface IForm{
  id: string;
  name: string;
}

interface IAnswers{
  [key: string]: string;
}

interface IAnswersStore{
  [key: string]: string[];
}

const Creator = (): JSX.Element => {
  const history = useLocation();
  const pathArray = history.pathname.split( '/' );
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
    const subscription = formsSubscription(
      pathArray[ 2 ], // ToDo maybe call array elements
      ( doc ) => { // ToDo maybe puts this function into const
        console.log( '', doc.data());
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if ( formID !== null ) {
      const subscription = formsSubscription( pathArray[ 2 ], ( doc ) => {
        const ans = doc.data()?.answers;

        if ( formID === doc.id ) {
          dispatch( setFormName( doc.data()?.name, doc.id ));
          getData( ans );
        }
      });

      setLink( `${ HOME_PAGE }/${ auth?.uid }/${ formID }` );

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

  return (
    <CreatorView
      answersCounter={ answersCounter }
      link={ link }
      onRandomClick={ onRandomClick }
      logout={ onLogout }
      onFormIdChange={ ( formID ): void => onFormIdChange( formID ) }
    />
  );
};

export default Creator;
