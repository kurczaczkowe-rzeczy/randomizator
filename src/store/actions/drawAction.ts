import firebase from 'firebase';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';
import _reduce from 'lodash/reduce';

import { CARDS, PAGES } from 'constans';
import { hideLoader, showLoader } from 'store/actions/globalActions';
import { ActionCreator, DrawAction } from 'store/types';
import {
  ADD_TAG,
  DRAW_RESULT,
  REMOVE_TAG,
  SET_TAGS,
  ERROR_DRAW_RESULT,
  REMOVE_ERROR_DRAW_RESULT,
  CLEAR_DRAW_RESULT,
  UNKNOWN_ERROR_DRAW_RESULT,
  SET_ERRORS_DRAW_RESULT,
} from 'store/actions';
import {
  Mapping,
  Tags,
  Tag,
  FirestoreAnswer,
  IField,
} from 'types';

import { randomItem, filterByTag } from './drawAction.utils';

type DrawActionCreator< PayloadArgs extends unknown[] = []> = ActionCreator< DrawAction, PayloadArgs >;

/** Actions trigger clean draw store. */
export const clearDraw: DrawActionCreator = () => ( dispatch ) => { dispatch({ type: CLEAR_DRAW_RESULT }); };

// ToDo: issue #109 - firstly get only answers that matches to tags then draw from them
/** Action fetch available answers to every field and filter them by tag then draw from them answers. */
export const setDrawResult: DrawActionCreator = () =>
  async (
    dispatch,
    getState,
    { getFirestore },
  ) => {
    dispatch( showLoader( PAGES.CREATOR, CARDS.DRAW ));
    const state = getState();
    const { id } = state.form;

    try {
      const firestore = getFirestore();

      const answersRef = await firestore.get({
        collectionGroup: 'fields',
        where: [
          [
            'formID',
            '==',
            id,
          ],
        ],
        storeAs: 'answersToDraw',
      });
      const { fields } = state.firestore.data?.forms?.[ id ];

      if ( !answersRef?.size ) {
        dispatch({
          type: SET_ERRORS_DRAW_RESULT,
          payload: { fields: _map< IField, string >( fields, ({ name }) => name ) },
        });

        return;
      }

      const answers = _map<
        firebase.firestore.QueryDocumentSnapshot< FirestoreAnswer >,
        FirestoreAnswer
      >( answersRef.docs, ( doc ) => doc.data());
      const groupedAnswers = _reduce< FirestoreAnswer, Mapping< string[]>>(
        answers,
        ( result, { fieldName, value }) => ({ ...result, [ fieldName ]: [ ...( result[ fieldName ] || []), value ]}),
        {},
      );

      const tags = _map( _get(
        state,
        'draw.tags',
        '',
      ), ( value ) => value.text );

      const draw = _reduce< Mapping< string[]>, Mapping< string >>(
        groupedAnswers,
        (
          result,
          currentFieldsAnswers,
          fieldName,
        ) => ({
          ...result,
          [ fieldName ]: randomItem( tags.length ? filterByTag( currentFieldsAnswers, tags ) : currentFieldsAnswers ),
        }),
        {},
      );

      _forEach( draw, ( fieldAnswers, fieldName ) => {
        if ( _isEmpty( fieldAnswers )) {
          dispatch({ type: ERROR_DRAW_RESULT, payload: { fieldName }});
        } else {
          dispatch({ type: REMOVE_ERROR_DRAW_RESULT, payload: { fieldName }});
        }
      });

      dispatch({
        type: DRAW_RESULT,
        payload: { draw },
      });
    } catch ( e: unknown ) {
      // ToDo: better error handling
      console.error( 'Set draw result fetch error: ', e );
      dispatch({ type: UNKNOWN_ERROR_DRAW_RESULT });
    } finally {
      dispatch( hideLoader( PAGES.CREATOR, CARDS.DRAW ));
    }
  };

/** Action trigger save tag in store. */
export const addTag: DrawActionCreator<[ tag: Tag ]> = ( tag ) => ( dispatch ) => {
  dispatch({ type: ADD_TAG, payload: { tag }});
};

/** Action trigger remove tag from store. */
export const removeTag: DrawActionCreator<[ index: number ]> = ( index ) => ( dispatch ) => {
  dispatch({ type: REMOVE_TAG, payload: { index }});
};

/** Actions override tags in store with provided by payload tags. */
export const setTags: DrawActionCreator<[ tags: Tags ]> = ( tags ) => ( dispatch ) => {
  dispatch({ type: SET_TAGS, payload: { tags }});
};
