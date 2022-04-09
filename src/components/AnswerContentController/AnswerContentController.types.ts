import { ReactNode } from 'react';

import { IAnswerRowController } from 'hooks/types';

/** An object describe content controller for answer. */
export interface IAnswerContentController extends IAnswerRowController {
  /** This value specify value send by form from user. */
  answer: ReactNode;
}
