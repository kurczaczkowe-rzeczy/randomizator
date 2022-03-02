import {
  LogoutActionsTypes,
  GlobalActionsTypes,
  ERROR_FORM_DONT_EXIST,
  SET_FORM_NAME,
  CLEAR_FORM,
  CLEAR_FORMS,
  ADD_FORM,
  CLEAR_USER,
  GlobalActionsTypesWithPayload,
  UserActionsTypes,
  AnswersManagerActionsTypes,
  AnswersManagerActionsTypesWithPayload,
  SET_DIRTY_ANSWER,
} from 'store/actions';
import {
  Answers,
  IAnswer,
  Role,
  StringOrNumber,
} from 'types';

export interface IState { readonly errors: string | null }

export interface IErrorMessage { errorMessage: string }

export interface IAction<Type> { type: Type }
export interface IActionWithPayload<Type, Payload> extends IAction<Type>{ payload: Payload }

// STATES
export interface IGlobalState{
  readonly bindToCard: string[];
  readonly isLoading: boolean;
  readonly isModalOpen: boolean;
  readonly language: string;
  readonly loadingsQueue: string[];
}
export interface IForm {
  readonly id: string;
  readonly name: string;
}
export interface IFormsState extends IState {
  readonly forms: IForm[];
}

export type FormState = IForm & IState;

export interface IUserState extends IState {
  creatorName: string;
  currentUserRole: Role;
}

export interface IAnswersManagerState {
  readonly areDirtyAnswers: boolean;
  readonly dirtyAnswer: Answers;
  readonly editedAnswers: StringOrNumber[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRootState {
  ans: unknown;
  auth: unknown;
  draw: unknown;
  firebase: any;
  firestore: any;
  form: FormState;
  forms: IFormsState;
  global: IGlobalState;
  usr: IUserState;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
// ACTIONS
export type LogoutAction = IAction<LogoutActionsTypes>;
export interface IGlobalActionsPayloads {
  bindToCard: string;
  callFrom: string;
}
export type GlobalAction =
  | IAction<GlobalActionsTypes>
  | IActionWithPayload<GlobalActionsTypesWithPayload, IGlobalActionsPayloads>;
export type FormsAction = IAction<typeof CLEAR_FORMS> | IActionWithPayload<typeof ADD_FORM, IForm>;
export type FormAction =
  | IAction<typeof CLEAR_FORM>
  | IActionWithPayload<typeof SET_FORM_NAME, IForm>
  | IActionWithPayload<typeof ERROR_FORM_DONT_EXIST, IErrorMessage>;
export interface IUserActionPayload {
  currentUserRole?: Role;
  errorMsg?: string;
  name?: string;
}
export type UserAction =
  | IAction<typeof CLEAR_USER>
  | IActionWithPayload<UserActionsTypes, IUserActionPayload>;

export interface IAnswersManagerActionsPayload { readonly answerID: IAnswer[ 'answerID' ] }
export interface IAnswersManagerDirtyAnswerPayload {
  readonly answer: IAnswer;
  readonly answerIndex: number;
}
export type AnswersManagerAction =
  | IAction<AnswersManagerActionsTypes>
  | IActionWithPayload<AnswersManagerActionsTypesWithPayload, IAnswersManagerActionsPayload>
  | IActionWithPayload<typeof SET_DIRTY_ANSWER, IAnswersManagerDirtyAnswerPayload>;
