import { LogoutActionsTypes, GlobalActionsTypes } from 'store/actions';

export interface Action<Type, Payload = undefined> {
  payload?: Payload;
  type: Type;
}

export type LogoutAction = Action<LogoutActionsTypes>;
export type GlobalAction = Action<GlobalActionsTypes>;
