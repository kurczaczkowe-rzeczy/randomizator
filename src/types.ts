import { ReactNode } from 'react';

export type StringOrNode = string | ReactNode;
export type StringOrNumber = string | number;
export type StringOrUndefined = string | undefined;

export interface Mapping< Value > {[key: string]: Value }
