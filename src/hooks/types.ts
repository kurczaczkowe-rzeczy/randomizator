export type SetValue<T> = ( value: T | (( val: T ) => T )) => void;

