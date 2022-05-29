import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';
import _includes from 'lodash/includes';

import { firebaseConfig } from 'config/firebaseConfig';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { PAGES, CARDS } from 'constans';

import Card from 'components/card';

import { UserCreatorSubmitHandler } from './UserCreator.types';
import { defaultUserValues, NAME_OF_TEMP_APP } from './UserCreator.consts';
import UserCreatorView from './UserCreator.view';
import {
  deleteNewApp,
  removeUser,
  userCreatorErrorHandler,
} from './UserCreator.utils';

const UserCreator = (): JSX.Element => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.USER_CREATOR ));
  const getString = useLocaleString();
  const [ shouldReset, setShouldReset ] = useState( false );

  const showLoaderOnUserCreator = (): void => {
    dispatch( showLoader( PAGES.DASHBOARD, CARDS.USER_CREATOR ));
  };
  const hideLoaderOnUserCreator = (): void => {
    dispatch( hideLoader( PAGES.DASHBOARD, CARDS.USER_CREATOR ));
  };

  const handleSubmit: UserCreatorSubmitHandler = async ({
    email,
    nickname,
    password,
    formName,
  }) => {
    showLoaderOnUserCreator();
    let newUser: firebase.User | null = null;

    try {
      const newAppInstance = firebase.initializeApp( firebaseConfig, NAME_OF_TEMP_APP );

      const userCredential = await newAppInstance.auth()
        .createUserWithEmailAndPassword( email, password );

      newUser = userCredential.user;
    } catch ( error: unknown ) {
      const errorMessage = userCreatorErrorHandler( error, getString );

      alert( errorMessage );
      hideLoaderOnUserCreator();

      return;
    } finally {
      deleteNewApp();
    }

    if ( !newUser ) {
      alert( getString( 'userIsNullAfterCreating' ));
      hideLoaderOnUserCreator();

      return;
    }

    try {
      // ToDo: change Promise.all to batch
      await Promise.all([
        firestore.collection( 'users' )
          .doc( newUser.uid )
          .set({ name: nickname }),
        firestore.collection( newUser.uid )
          .add({ name: formName, answers: []}),
      ]);

    } catch ( error: unknown ) {
      const errorMessage = userCreatorErrorHandler( error, getString );

      alert( errorMessage );
      await removeUser(
        email,
        password,
        getString,
      );

      return;
    } finally {
      setShouldReset( true );
      hideLoaderOnUserCreator();
    }
  };

  return (
    <Card
      centerBody={ false }
      isLoading={ isLoading }
      body={ (
        <UserCreatorView
          defaultValues={ defaultUserValues }
          onReset={ () => { setShouldReset( false ); } }
          onSubmit={ handleSubmit }
          shouldResetForm={ shouldReset }
        />
      ) }
    />
  );
};

export default UserCreator;
