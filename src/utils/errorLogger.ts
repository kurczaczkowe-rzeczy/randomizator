import { hasProperties } from 'utils/hasProperties';

export class FirebaseError extends Error {
  readonly code: string;

  readonly message: string;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    code: string,
    message: string,
    ...props: ( string | undefined )[]
  ) {
    super( ...props );
    this.code = code;
    this.message = message;
  }
}

const firebaseErrorProperties = [
  'code',
  'message',
  'stack',
];

/**
 * Method catch uncaught errors and log them to console.
 *
 * @param error - object contains message and code of occurred error
 * @param errorOrigin - place from call this method.
 */
export const errorLogger = ( error: unknown, errorOrigin: string ): void => {
  if ( hasProperties( error, firebaseErrorProperties )) {
    const _error = error as FirebaseError;

    console.error(
      `An uncaught error occurrence on %c${ errorOrigin }%c with code: %c${
        _error.code
      }%c and message: %c${
        _error.message
      }%c\n`,
      'font-style: italic; text-transform: uppercase;',
      null,
      'font-weight: bold;',
      null,
      'font-weight: bold;',
      null,
      _error.stack,
    );

    return;
  }

  console.error(
    `An uncaught error occurrence on %c${ errorOrigin }%c ->`,
    'font-style: italic; text-transform: uppercase;',
    null,
    error,
  );
};
