import { ReactNode } from 'react';
import { StringOrNumber } from 'types';

export interface ITab {
  /** The label element */
  label: ReactNode;
  /** Specify if element is active or not. */
  selected?: boolean;
  /**
   * Describes the unique value associated with the tab. Based on this value specific tab panel
   * recognize it and display content.
   */
  value: StringOrNumber;
}
