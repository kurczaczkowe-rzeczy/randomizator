import { LocaleResourcesIDs } from 'assets/locale/types';

export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

export type GetString = ( resourceId: LocaleResourcesIDs ) => string;
