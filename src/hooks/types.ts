export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: string ) => string;

export interface IResourceType {
  [ key: string ]: string;
}
