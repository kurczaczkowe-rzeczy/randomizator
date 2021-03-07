import { LogoutActionsTypes } from 'store/actions';

export interface Action<Type, Payload = undefined> {
  payload?: Payload;
  type: Type;
}

export type LogoutAction = Action<LogoutActionsTypes>;
