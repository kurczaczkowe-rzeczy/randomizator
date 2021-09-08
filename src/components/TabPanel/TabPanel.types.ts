import { ReactNode } from 'react';
import { StringOrNumber } from 'types';

export interface ITabPanel {
  /** Specify content of panel. */
  children: ReactNode;
  /** Specify unique value associated with this panel. */
  index: StringOrNumber;
  /** Specify current value of tabs state */
  value: StringOrNumber;
}
