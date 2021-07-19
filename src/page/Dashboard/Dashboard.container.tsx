import { useDispatch } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';

import useLocaleString from 'hooks/useLocaleString';
import { firebaseConfig } from 'config/firebaseConfig';
import { hideLoader, showLoader } from 'store/actions/globalActions';

import { UserCreatorSubmitHandler } from 'components/UserCreator';

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
} from './Dashboard.consts';

const Dashboard = (): JSX.Element => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const getString = useLocaleString();

  const handleSubmit: UserCreatorSubmitHandler = async ({
    email,
    nickname,
    password,
    formName,
  }) => {
    dispatch( showLoader( DASHBOARD ));
    let newUser: firebase.User | null = null;

    try {
      const newAppInstance = firebase.initializeApp( firebaseConfig, NAME_OF_TEMP_APP );

      const userCredential = await newAppInstance.auth()
        .createUserWithEmailAndPassword( email, password );

      newUser = userCredential.user;
    } catch ( error: unknown ) {
      const errorMessage = userCreatorErrorHandler( error, getString );

      alert( errorMessage );
      dispatch( hideLoader( DASHBOARD ));

      return;
    } finally {
      deleteNewApp();
    }

    if ( !newUser ) {
      alert( getString( 'userIsNullAfterCreating' ));
      dispatch( hideLoader( DASHBOARD ));

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
    } finally {
      dispatch( hideLoader( DASHBOARD ));
    }
  };
  const userCreatorProps = {
    defaultValues: defaultUserValues,
    onSubmit: handleSubmit,
  };

  return (
    <DashboardView userCreatorProps={ userCreatorProps } />
  );
};

export default Dashboard;
