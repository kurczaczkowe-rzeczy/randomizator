import { useEffect, useState } from 'react';
import {
  useSelector,
  shallowEqual,
  useDispatch,
} from 'react-redux';
import _isNil from 'lodash/isNil';
import _forEach from 'lodash/forEach';
import _union from 'lodash/union';
import _isNull from 'lodash/isNull';

import useLocalStorage from 'hooks/useLocalStorage';
import { clearDraw, setDrawResult } from 'store/actions/drawAction';
import { setAnswers } from 'store/actions/answersAction';
import { setFormName } from 'store/actions/formAction';
import { signOut } from 'store/actions/authAction';
import { addForm } from 'store/actions/formsActions';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';
import { FORM_ID_KEY, HOME_PAGE } from 'constans';

import CreatorView from './CreatorPage.view';
import { formsSubscription } from './CreatorPage.utils';
import {
  IForm,
  IAnswers,
  IAnswersStore,
} from './CreatorPage.types';

const Creator = (): JSX.Element => {
  const [ formID, setFormID ] = useLocalStorage<string>( FORM_ID_KEY );
  const [ link, setLink ] = useState( '' );

  const auth = useSelector(( state: RootState ) => state.firebase.auth, shallowEqual );
  const answersCounter = useSelector(( state: RootState ) => state.ans.counter );
  const dispatch = useDispatch();

  const updateFormID = ( forms: IForm[]): void => {
    const found = forms.findIndex(( form: IForm ) => form.id === formID );

    if ( found === -1 ) {
      setFormID( forms[ 0 ].id );
    }
  };

  useEffect(() => {
    if ( auth ) {
      const subscription = formsSubscription(
        auth.uid,
        ( doc ) => { // ToDo maybe puts this function into const
          const form = {
            name: doc.data().name ?? 'Brak nazwy',
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
