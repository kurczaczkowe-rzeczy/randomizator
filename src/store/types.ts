import {
  ExtendedFirestoreInstance,
  ExtendedFirebaseInstance,
  ReduxFirestoreQuerySetting,
} from 'react-redux-firebase';
import { ThunkAction } from 'redux-thunk';

import {
  ERROR_FORM,
  CLEAR_FORMS,
  ADD_FORM,
  CLEAR_USER,
  SET_DIRTY_ANSWER,
  LogoutActionsTypes,
  GlobalActionsTypes,
  LoaderActionsTypes,
  UserActionsTypes,
  AnswersManagerActionsTypes,
  AnswersManagerActionsTypesWithPayload,
  FormActionsTypes,
  DrawActionsTypes,
  ADD_TAG,
  SET_TAGS,
  REMOVE_TAG,
  ERROR_DRAW_RESULT,
  REMOVE_ERROR_DRAW_RESULT,
  DRAW_RESULT,
  SET_ERRORS_DRAW_RESULT,
  AnswersActionsTypes,
  CLEAR_ANSWERS,
  FirestoreActionTypes,
  SET_FORM_NAME,
  SET_SELECTED_FORM,
  BlockNavigationActionType,
} from 'store/actions';
import {
  WeightAnswers,
  IWeightAnswer,
  Role,
  StringOrNumber,
  IForm,
  Forms,
  Mapping,
  Tags,
  Tag,
} from 'types';
import { CARDS, PAGES } from 'constans';

export interface IState { readonly errors: string | null }

export interface IErrorMessage { errorMessage: string }

export interface IAction< Type > { type: Type }
export interface IActionWithPayload< Type, Payload > extends IAction< Type >{ payload: Payload }

type Card = keyof typeof CARDS;

// STATES
export interface IGlobalState {
  readonly bindToCard: ( Card | undefined )[];
  readonly blockNavigationActionPayload?: Mapping< unknown >;
  readonly blockNavigationActionType: string | null;
  readonly isLoading: boolean;
  readonly isModalOpen: boolean;
  readonly language: 'PL' | 'ENG';
  readonly loadingsQueue: string[];
}

/** An object represent forms state. It provides array of forms data and extends
 * {@link IState} to gathered forms errors. */
export interface IFormsState extends IState {
  /** Array of forms information. */
  readonly forms: Forms;
}

/** An object represent form state. It extends {@link IForm} and {@link IState} to provide selected
 * form data and its errors. */
export interface IFormState extends IForm, IState {}

export interface IUserState extends IState {
  creatorName: string;
  currentUserRole: Role;
}

export interface IAnswersManagerState {
  readonly areDirtyAnswers: boolean;
  readonly dirtyAnswer: WeightAnswers;
  readonly editedAnswers: StringOrNumber[];
}

export interface IDrawState extends IState {
  errorFields: string[];
  result: Mapping< string >;
  tags: Tags;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRootState {
  ans: IState;
  answersManager: IAnswersManagerState;
  auth: any;
  draw: IDrawState;
  firebase: any;
  firestore: any;
  form: IFormState;
  forms: IFormsState;
  global: IGlobalState;
  usr: IUserState;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
// ACTIONS
export type LogoutAction = IAction< LogoutActionsTypes >;
export interface ILoaderPayload {
  /** Card from which loader action was called. */
  bindToCard?: Card;
  /** Page from which loader action was called. */
  callFrom: keyof typeof PAGES;
}
export interface IBlocNavigationPayload {
  blockNavigationActionPayload?: Mapping< unknown >;
  blockNavigationActionType: string;
}
export type GlobalAction =
  | IAction< GlobalActionsTypes >
  | IActionWithPayload< LoaderActionsTypes, ILoaderPayload >
  | IActionWithPayload< BlockNavigationActionType, IBlocNavigationPayload >;
export type FormsAction = IAction< typeof CLEAR_FORMS > | IActionWithPayload< typeof ADD_FORM, IForm >;
export type FormAction =
  | IAction< FormActionsTypes >
  | IActionWithPayload< typeof SET_SELECTED_FORM, IForm >
  | IActionWithPayload< typeof SET_FORM_NAME, Pick< IForm, 'id' >>
  | IActionWithPayload< typeof ERROR_FORM, IErrorMessage >;
export interface IUserActionPayload {
  currentUserRole?: Role;
  errorMsg?: string;
  name?: string;
}
export type UserAction =
  | IAction< typeof CLEAR_USER >
  | IActionWithPayload< UserActionsTypes, IUserActionPayload >;

export interface IAnswersManagerActionsPayload { readonly id: IWeightAnswer[ 'id' ] }
export interface IAnswersManagerDirtyAnswerPayload {
  readonly answer: IWeightAnswer;
  readonly answerIndex: number;
}
export type AnswersManagerAction =
  | IAction< AnswersManagerActionsTypes >
  | IActionWithPayload< AnswersManagerActionsTypesWithPayload, IAnswersManagerActionsPayload >
  | IActionWithPayload< typeof SET_DIRTY_ANSWER, IAnswersManagerDirtyAnswerPayload >;

export interface IDrawPayload { draw: Mapping< string > }
export interface IDrawErrorPayload { fieldName: string }
export interface IDrawErrorsPayload { fields: string[] }
export interface IRemoveTagPayload { index: number }
export interface IAddTagPayload { tag: Tag }
export interface ISetTagsPayload { tags: IDrawState[ 'tags' ] }

export type DrawAction =
  | IAction< DrawActionsTypes >
  | IActionWithPayload< typeof ADD_TAG, IAddTagPayload >
  | IActionWithPayload< typeof SET_TAGS, ISetTagsPayload >
  | IActionWithPayload< typeof REMOVE_TAG, IRemoveTagPayload >
  | IActionWithPayload< typeof ERROR_DRAW_RESULT | typeof REMOVE_ERROR_DRAW_RESULT, IDrawErrorPayload >
  | IActionWithPayload< typeof SET_ERRORS_DRAW_RESULT, IDrawErrorsPayload >
  | IActionWithPayload< typeof DRAW_RESULT, IDrawPayload >;

export interface IAnswersPayload { error: string }
export type AnswersAction =
  | IAction< typeof CLEAR_ANSWERS >
  | IActionWithPayload< AnswersActionsTypes, IAnswersPayload >;

export type FirestoreAction = IAction< FirestoreActionTypes >;

// ACTION UTILS
/* eslint-disable @typescript-eslint/no-explicit-any */

interface IFirestore extends ExtendedFirestoreInstance {
  /* Because DocumentSnapshot nad QuerySnapshot are classes is not easily to merge this type here and until
     redux-firestore not fix that it has to be any */
  get: ( docPath: string | ReduxFirestoreQuerySetting ) => Promise< any >;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface IMiddlewares {
  getFirebase: () => ExtendedFirebaseInstance;
  getFirestore: () => IFirestore;
}

export type ActionCreator< Action extends IAction< unknown >, PayloadArgs extends unknown[] = []> =
  ( ...payload: PayloadArgs ) => ThunkAction<
    Promise< void > | void,
    IRootState,
    IMiddlewares,
    Action
  >;
