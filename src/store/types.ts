import {
  ExtendedFirestoreInstance,
  ExtendedFirebaseInstance,
  ReduxFirestoreQuerySetting,
} from 'react-redux-firebase';
import { ThunkAction } from 'redux-thunk';

import {
  ADD_FORM,
  ADD_TAG,
  AnswersActionsTypes,
  AnswersManagerActionsTypes,
  AnswersManagerActionsTypesWithPayload,
  BlockNavigationActionType,
  CLEAR_ANSWERS,
  CLEAR_FORMS,
  CLEAR_USER,
  DRAW_RESULT,
  DrawActionsTypes,
  ERROR_DRAW_RESULT,
  ERROR_FORM,
  FirestoreActionTypes,
  FormActionsTypes,
  GlobalActionsTypes,
  LoaderActionsTypes,
  LogoutActionsTypes,
  REMOVE_ERROR_DRAW_RESULT,
  REMOVE_TAG,
  SET_DIRTY_ANSWER,
  SET_ERRORS_DRAW_RESULT,
  SET_FORM_NAME,
  SET_SELECTED_FORM,
  SET_TAGS,
  UserActionsTypes,
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

export interface IAction< Type extends string > { type: Type }
export interface IActionWithPayload< Type extends string, Payload > extends IAction< Type >{ payload: Payload }

type Card = keyof typeof CARDS;

interface IBlockNavigationAction extends IAction< string >{
  /** Data that should be passed to action invoked when user want to change page from blocked page */
  payload?: Mapping< unknown >;
}

const language = { PL: 'PL', ENG: 'ENG' } as const;

export type Language = keyof typeof language;

// STATES
/** An object represent global variables stored in state. */
export interface IGlobalState {
  /** Contains all cards on which loader should be shown. */
  readonly bindToCard: ( Card | undefined )[];
  /** Array of types associated with their payloads that will be invoked after confirm dialog. */
  readonly blockNavigationActions: IBlockNavigationAction[];
  /** Specify that loader should show. */
  readonly isLoading: boolean;
  /** Specify that modal should be open. */
  readonly isModalOpen: boolean;
  /** Contains current selected language */
  readonly language: Language;
  /** Contains all pages on which loader should be shown. */
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
  /** Array of types associated with their payloads that will be invoked after confirm dialog. */
  blockNavigationActions: IGlobalState[ 'blockNavigationActions' ];
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

export type ActionCreator< Action extends IAction< string >, PayloadArgs extends unknown[] = []> =
  ( ...payload: PayloadArgs ) => ThunkAction<
    Promise< void > | void,
    IRootState,
    IMiddlewares,
    Action
  >;
