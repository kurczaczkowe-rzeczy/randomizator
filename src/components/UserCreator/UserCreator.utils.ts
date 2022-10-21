import firebase from 'firebase/app';

import { errorLogger, FirebaseError } from 'utils/errorLogger';
import { Localize } from 'hooks/types';
import { firebaseConfig } from 'config/firebaseConfig';

import { ERROR_ORIGIN, NAME_OF_TEMP_APP } from './UserCreator.consts';

/**
 * Method handle errors in user creator widget.
 *
 * @param error - object contains message and code of occurred error
 * @param localize - method used to return localized string.
 */
export const userCreatorErrorHandler = ( error: unknown, localize: Localize ): string => {
  if ( error && typeof error == 'object' && error.hasOwnProperty( 'code' )) {
    const firebaseError = error as FirebaseError;

    switch ( firebaseError.code ) {
      case 'permission-denied': {
        return localize( 'firestorePermissionDenied' );
      }
      case 'auth/email-already-in-use': {
        return localize( 'emailAlreadyInUse' );
      }
      case 'auth/weak-password': {
        return localize( 'weakPassword' );
      }
      case 'app/duplicate-app': {
        return localize( 'duplicatedApp' );
      }
      case 'auth/network-request-failed': {
        return localize( 'networkRequestFailed' );
      }
      default: {
        errorLogger( firebaseError, ERROR_ORIGIN );

        return localize( 'unknownError' );
      }
    }
  }

  errorLogger( error, ERROR_ORIGIN );

  return localize( 'unknownError' );
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
 * @param localize - method used to return localized string.
 */
export const removeUser = async (
  email: string,
  password: string,
  localize: Localize,
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
      alert( localize( 'tempAppNotCreated' ));

      return;
    }

    await newAppInstance?.auth().currentUser?.delete();
  } catch ( error: unknown ) {
    errorLogger( error, ERROR_ORIGIN );
  } finally {
    deleteNewApp();
  }
};
