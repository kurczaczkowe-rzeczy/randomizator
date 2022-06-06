import { ReactNode } from 'react';

import { StringOrNode } from 'types';

export interface TitleWithContentAndId {
  /** Text described content of specific card. */
  content: string;
  /** Identifier of title. */
  id: string;
}

export interface ICard {
  /** Specify content of card */
  body: ReactNode | ReactNode[];
  /** Class overrides or extend root element styles */
  cardClass?: string;
  /** Specify if body should display in center of card */
  centerBody?: boolean;
  /** Determine if body fit to available space */
  fullWidthBody?: boolean;
  /** Identifier of root element. It is optional */
  id?: string;
  /** Specify if loader should show or not */
  isLoading?: boolean;
  /** Specify title of card */
  title?: StringOrNode | TitleWithContentAndId;
  /** Determine if card is displaying with background, border and padding or is just an unstyled container
   * for a body passed from the parent component as it is. */
  transparent?: boolean;
}
