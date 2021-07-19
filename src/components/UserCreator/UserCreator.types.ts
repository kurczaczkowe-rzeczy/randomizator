export interface IUserCreatorValues {
  email: string;
  formName: string;
  nickname: string;
  password: string;
}

export type UserCreatorSubmitHandler = ( data: IUserCreatorValues ) => void | Promise<void>;

export interface IUserCreator {
  defaultValues: IUserCreatorValues;
  onSubmit: UserCreatorSubmitHandler;
}
