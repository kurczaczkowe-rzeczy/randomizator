import { Tag } from 'react-tag-input';

import { IBaseAnswer } from './answerTypes';

export type Tags = Tag[];
export type { Tag };
export type RandomizedAnswer = Omit< IBaseAnswer, 'id' | 'answerID' >;
export type RandomizedAnswers = RandomizedAnswer[];
