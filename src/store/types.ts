import {
  LogoutActionsTypes,
  GlobalActionsTypes,
  FormsActionsTypes,
} from 'store/actions';

export interface IState { readonly errors: string | null }

export interface IAction<Type, Payload = undefined> {
  payload?: Payload;
  type: Type;
}

// STATES
export interface IGlobalState{
  readonly isLoading: boolean;
  readonly isModalOpen: boolean;
}
export interface IFormState {
  readonly id: string;
  readonly name: string;
}
export interface IFormsState extends IState {
  readonly forms: IFormState[];
}

// ACTIONS
export type LogoutAction = IAction<LogoutActionsTypes>;
export type GlobalAction = IAction<GlobalActionsTypes>;
export type FormsAction = IAction<FormsActionsTypes, IFormState>;
