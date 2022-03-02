import { ReactNode } from 'react';

import { USER_ROLES } from 'constans';

export type StringOrNode = string | ReactNode;
export type StringOrNumber = string | number;
export type StringOrUndefined = string | undefined;

/** An object represent unspecified property with specific value type. */
export interface Mapping< Value > {[ key: string ]: Value }

/** An object represents answer and associated property. */
export interface IAnswer {
  /** This property specify identifier of answer. */
  answerID: StringOrNumber;
  /** This property specify current value of weight associated with specific answer. */
  weight: number;
}
export type Answers = IAnswer[];

export type Role = keyof typeof USER_ROLES | '';
export type Roles = Role[];
