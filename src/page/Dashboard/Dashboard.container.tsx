import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';
import _includes from 'lodash/includes';

import useLocaleString from 'hooks/useLocaleString';
import { firebaseConfig } from 'config/firebaseConfig';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';

import { UserCreatorSubmitHandler } from 'components/UserCreator';
import PageContainer from 'components/PageContainer';

import {
  deleteNewApp,
  userCreatorErrorHandler,
  removeUser,
} from './Dashboard.utils';
import DashboardView from './Dashboard.view';
import {
  DASHBOARD,
  defaultUserValues,
  NAME_OF_TEMP_APP,
  USER_CREATOR,
} from './Dashboard.consts';

const Dashboard = (): JSX.Element => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const bindToCard = useSelector(( state: RootState ) => state.global.bindToCard );
  const getString = useLocaleString();
  const [ shouldResetUserCreator, setShouldResetUserCreator ] = useState( false );

  const showLoaderOnUserCreator = (): void => {
    dispatch( showLoader( DASHBOARD, USER_CREATOR ));
  };
  const hideLoaderOnUserCreator = (): void => {
    dispatch( hideLoader( DASHBOARD, USER_CREATOR ));
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
      setShouldResetUserCreator( true );
      hideLoaderOnUserCreator();
    }
  };
  const userCreatorProps = {
    defaultValues: defaultUserValues,
    shouldResetForm: shouldResetUserCreator,
    onReset: () => { setShouldResetUserCreator( false ); },
    onSubmit: handleSubmit,
    isLoading: _includes( bindToCard, USER_CREATOR ),
  };

  // ToDo: move userCreatorProps and associated logic with them to user creator component
  return (
    <PageContainer>
      <DashboardView userCreatorProps={ userCreatorProps } />
    </PageContainer>
  );
};

export default Dashboard;
