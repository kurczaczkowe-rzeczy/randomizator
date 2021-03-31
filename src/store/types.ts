import {
  LogoutActionsTypes,
  GlobalActionsTypes,
  FormsActionsTypes,
  ERROR_FORM_DONT_EXIST,
  SET_FORM_NAME,
  CLEAR_FORM,
} from 'store/actions';

export interface IState { readonly errors: string | null }

export interface IErrorMessage {errorMessage: string }

export interface IAction<Type> {
  type: Type;
}
export interface IActionWithPayload<Type, Payload> extends IAction<Type>{
  payload: Payload;
}

// STATES
export interface IGlobalState{ readonly isLoading: boolean }
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
export type GlobalAction = IAction<GlobalActionsTypes>;
export type FormsAction = IActionWithPayload<FormsActionsTypes, IForm>;
export type FormAction =
  | IAction<typeof CLEAR_FORM>
  | IActionWithPayload<typeof SET_FORM_NAME, IForm>
  | IActionWithPayload<typeof ERROR_FORM_DONT_EXIST, IErrorMessage>;
