import firebase from 'firebase/app';

import { errorLogger, FirebaseError } from 'utils/errorLogger';
import { GetString } from 'hooks/types';
import { firebaseConfig } from 'config/firebaseConfig';

import { ERROR_ORIGIN, NAME_OF_TEMP_APP } from './Dashboard.consts';

/**
 * Method handle errors in user creator widget.
 *
 * @param error - object contains message and code of occurred error
 * @param getString - method used to return localized string.
 */
export const userCreatorErrorHandler = ( error: unknown, getString: GetString ): string => {
  if ( error && typeof error == 'object' && error.hasOwnProperty( 'code' )) {
    const firebaseError = error as FirebaseError;

    switch ( firebaseError.code ) {
      case 'permission-denied': {
        return getString( 'firestorePermissionDenied' );
      }
      case 'auth/email-already-in-use': {
        return getString( 'emailAlreadyInUse' );
      }
      case 'auth/weak-password': {
        return getString( 'weakPassword' );
      }
      case 'app/duplicate-app': {
        return getString( 'duplicatedApp' );
      }
      default: {
        errorLogger( firebaseError, ERROR_ORIGIN );

        return getString( 'unknownError' );
      }
    }
  }

  errorLogger( error, ERROR_ORIGIN );

  return getString( 'unknownError' );
};

/**
 * Method delete temp app that is used to create user from dashboard.
 */
export const deleteNewApp = (): void => {
  firebase.app( NAME_OF_TEMP_APP ).delete();
};

/**
 * Method removes user with provided email and password.
 *
 * @param email - user email used to login to app
 * @param password - user password
 * @param getString - method used to return localized string.
 */
export const removeUser = async (
  email: string,
  password: string,
  getString: GetString,
): Promise<void> => {
  let newAppInstance: firebase.app.App | null = null;

  try {
    newAppInstance = firebase.initializeApp( firebaseConfig, NAME_OF_TEMP_APP );

    await newAppInstance.auth().signInWithEmailAndPassword( email, password );
  } catch ( error: unknown ) {
    errorLogger( error, ERROR_ORIGIN );
  }

  try {
    if ( !newAppInstance?.auth().currentUser ) {
      alert( getString( 'tempAppNotCreated' ));

      return;
    }

    await newAppInstance?.auth().currentUser?.delete();
  } catch ( error: unknown ) {
    errorLogger( error, ERROR_ORIGIN );
  } finally {
    deleteNewApp();
  }
};
