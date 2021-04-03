import { ReactNode } from 'react';

export interface ICard {
  /** Specify content of card */
  body: ReactNode;
  /** Class overrides or extend root element styles */
  cardClass?: string;
  /** Identifier of root element. It is optional */
  id?: string;
  /** Specify title of card */
  title?: string | {
    content: string;
    id: string;
  };
}
