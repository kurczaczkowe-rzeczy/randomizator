import { ReactNode } from 'react';

export type StringOrNode = string | ReactNode;
export interface TitleWithContentAndId {
  content: string;
  id: string;
}
