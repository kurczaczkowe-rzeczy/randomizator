import { useCallback, useMemo } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { WriteBatch } from '@firebase/firestore-types';
import _forEach from 'lodash/forEach';

import { checkValueIsValid } from 'utils/answersUtils';
import { AnswerFields, AnswersFields } from 'types';

type AddParamsTuple< AnswerFields > = [
  answerFields: AnswerFields,
  onSuccess: () => void,
  onFailure: () => void,
];

type AddAnswer = ( ...params: AddParamsTuple< AnswerFields > ) => Promise< void >;

type AddAnswers = ( ...params: AddParamsTuple< AnswersFields > ) => Promise< void >;

type CreateAnswer = ( batch: WriteBatch, answerFields: AnswerFields ) => void;

interface IAnswerBatch {
  addAnswer: AddAnswer;
  addAnswers: AddAnswers;
}

const useAnswerBatch = ( creatorID: string, formID: string ): IAnswerBatch => {
  const {
    doc,
    FieldValue,
    batch: firestoreBatch,
  } = useFirestore();

  const formRef = useMemo(() => creatorID && formID ? doc( `${ creatorID }/${ formID }` ) : null, [
    creatorID,
    doc,
    formID,
  ]);

  const createAnswer = useCallback< CreateAnswer >(( batch, answerFields ) => {
    /* ToDo: throw error when fields number * answers + number of increment counts (equal to answers to added)
        is GTE 500, because in this case firestore batch reach limit operation */
    if ( !formRef ) {
      alert( 'Wystąpił błąd podczas zapisywania odpowiedzi' );

      return;
    }

    const answersRef = formRef.collection( 'answers' ).doc();
    const fieldsRef = answersRef.collection( 'fields' );

    _forEach( answerFields, ( value, fieldName ) => {
      const isValid = checkValueIsValid( value );

      batch.set( fieldsRef.doc(), {
        answerID: answersRef.id,
        formID,
        fieldName,
        value: isValid ? value : '',
        timestamp: Date.now(),
        weight: isValid ? 1 : 0,
      });
    });

    batch.update( formRef, { counter: FieldValue.increment( 1 ) });
  }, [
    FieldValue,
    formID,
    formRef,
  ]);

  const addAnswer = useCallback< AddAnswer >( async (
    fields,
    onSuccess,
    onFailure,
  ) => {
    try {
      const batch = firestoreBatch();

      createAnswer( batch, fields );

      await batch.commit();
      onSuccess();
    } catch ( e: unknown ) {
      // ToDo: Better error handling
      console.error( 'Error occurrence during the process of adding answers:', e );
      onFailure();
    }
  }, [ createAnswer, firestoreBatch ]);

  const addAnswers = useCallback< AddAnswers >( async (
    fields,
    onSuccess,
    onFailure,
  ) => {
    // ToDo: Add splitting into smaller pieces answers
    try {
      const batch = firestoreBatch();

      _forEach( fields, ( answerFields ) => { createAnswer( batch, answerFields ); });

      await batch.commit();
      onSuccess();
    } catch ( e: unknown ) {
      // ToDo: Better error handling
      console.error( 'Error occurrence during the process of adding answers:', e );
      onFailure();
    }
  }, [ createAnswer, firestoreBatch ]);

  return { addAnswer, addAnswers };
};

export default useAnswerBatch;
