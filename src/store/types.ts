import {
  LogoutActionsTypes,
  GlobalActionsTypes,
  ERROR_FORM_DONT_EXIST,
  SET_FORM_NAME,
  CLEAR_FORM,
  CLEAR_FORMS,
  ADD_FORM,
  GlobalActionsTypesWithPayload,
} from 'store/actions';

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
