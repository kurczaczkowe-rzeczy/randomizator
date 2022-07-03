import { useCallback, useMemo } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { WriteBatch } from '@firebase/firestore-types';
import _forEach from 'lodash/forEach';
import _filter from 'lodash/filter';
import _chunk from 'lodash/chunk';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';

import { checkValueIsValid } from 'utils/answersUtils';
import useLocaleString from 'hooks/useLocaleString';
import {
  AnswerFields,
  AnswersFields,
  Mapping,
} from 'types';

type AddParamsTuple< AnswerFields > = [
  answerFields: AnswerFields,
  onSuccess: () => void,
  onFailure: () => void,
  formID?: string,
];

type AddAnswer = ( ...params: AddParamsTuple< AnswerFields > ) => Promise< void >;

type AddAnswers = ( ...params: AddParamsTuple< AnswersFields > ) => Promise< void >;

type CreateAnswer = ( batch: WriteBatch, answerFields: AnswerFields, formID?: string ) => void;

// ToDo: remove in next version
interface IFirestormOldFormStructure {
  answers: Mapping< string >[];
  id: string;
  name: string;
}

// ToDo: remove in next version
type UpdateFirestoreDataStructure = ( ...params: [
  forms: IFirestormOldFormStructure[],
  onSuccess: () => void,
  onFailure: () => void,
]) => Promise< void >;

interface IAnswerBatch {
  addAnswer: AddAnswer;
  addAnswers: AddAnswers;
  // ToDo: remove in next version
  updateFirestoreDataStructure: UpdateFirestoreDataStructure;
}

const MAX_ANSWERS_COUNT_TO_CHUNK = 100;

// ToDo: remove in next version
const getFieldName = ( fieldName: string ): string => {
  if ( fieldName === 'nameFemale' ) { return 'Imię damskie'; }
  if ( fieldName === 'nameMale' ) { return 'Imię męskie'; }

  return fieldName;
};

const useAnswerBatch = ( creatorID: string, formID: string ): IAnswerBatch => {
  const {
    doc,
    FieldValue,
    batch: firestoreBatch,
  } = useFirestore();
  const getString = useLocaleString();

  // ToDo: change to const in next version
  let formRef = useMemo(() => creatorID && formID ? doc( `${ creatorID }/${ formID }` ) : null, [
    creatorID,
    doc,
    formID,
  ]);

  const createAnswer = useCallback< CreateAnswer >((
    batch,
    answerFields,
    // ToDo: remove in next version
    formId,
  ) => {
    /* ToDo: throw error when fields number * answers + number of increment counts (equal to answers to added)
        is GTE 500, because in this case firestore batch reach limit operation
       ToDo: remove formId in next version
     */
    if ( !formRef ) {
      alert( getString( 'errorAnswerSending' ));

      throw Error( getString( 'errorAnswerSending' ));
    }

    const answersRef = formRef.collection( 'answers' ).doc();
    const fieldsRef = answersRef.collection( 'fields' );

    _forEach( answerFields, ( value, fieldName ) => {
      const isValid = checkValueIsValid( value );

      batch.set( fieldsRef.doc(), {
        answerID: answersRef.id,
        // ToDo: remove formId in next version
        formID: formId ?? formID,
        // ToDo: change back to previous version in next version
        fieldName: getFieldName( fieldName ),
        value: isValid ? value : '',
        timestamp: Date.now(),
        weight: Number( isValid ),
      });
    });

    batch.update( formRef, { counter: FieldValue.increment( 1 ) });
  }, [
    FieldValue,
    formID,
    formRef,
    getString,
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
    // ToDo: remove in next version
    formId,
  ) => {
    _forEach( _chunk( fields, MAX_ANSWERS_COUNT_TO_CHUNK ), async ( chunkedFields ) => {
      try {
        const batch = firestoreBatch();

        _forEach( chunkedFields, ( answerFields ) => {
          createAnswer(
            batch,
            answerFields,
            // ToDo: remove in next version
            formId,
          );
        });

        await batch.commit();
        onSuccess();
      } catch ( e: unknown ) {
        // ToDo: Better error handling
        console.error( 'Error occurrence during the process of adding answers:', e );
        onFailure();
      }
    });
  }, [ createAnswer, firestoreBatch ]);

  // ToDo: remove in next version
  const updateFirestoreDataStructure = useCallback< UpdateFirestoreDataStructure >( async (
    forms,
    onSuccess,
    onFailure,
  ) => {
    const oldStructuredForms = _filter( forms, 'answers' );

    if ( _isEmpty( oldStructuredForms )) {
      onSuccess();
      console.info( '%cNothing to do. Every forms are now in right structure.', 'color: #4199f7;' );

      return;
    }

    _forEach( oldStructuredForms, async ({ id, answers }) => {
      try {
        const batch = firestoreBatch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
        formRef = doc( `${ creatorID }/${ id }` );
        const data = { fields: [{ name: 'Imię męskie', type: 'text' }, { name: 'Imię damskie', type: 'text' }]};

        batch.update( formRef, data );

        batch.commit();

        await addAnswers(
          answers,
          _noop,
          _noop,
          id,
        );

        onSuccess();
      } catch ( e: unknown ) {
        console.error( e );

        onFailure();
      }
    });
  }, [ addAnswers, creatorID ]);

  return {
    addAnswer,
    addAnswers,
    // ToDo: remove in next version
    updateFirestoreDataStructure,
  };
};

export default useAnswerBatch;
