import { ReactNode } from 'react';

import { TitleWithContentAndId, StringOrNode } from 'types';

export interface ICard {
  /** Specify content of card */
  body: ReactNode;
  /** Class overrides or extend root element styles */
  cardClass?: string;
  /**
   * Specify if body should display in center of card
   */
  centerBody?: boolean;
  /** Identifier of root element. It is optional */
  id?: string;
  /** Specify title of card */
  title?: StringOrNode | TitleWithContentAndId;
}
