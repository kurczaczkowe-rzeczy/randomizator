import { ReactNode } from 'react';
import { StringOrNumber } from 'types';

export interface ITab {
  /** Specify content of panel */
  content: ReactNode;
  /**
   * Describes the unique value associated with the tab. Based on this value specific tab panel
   * recognize it and display content.
   */
  index: StringOrNumber;
  /** The label element */
  label: ReactNode;
}

export interface ITabs {
  /** Specify which tab is default selected */
  defaultTab: string;
  /** Method call after user click on any tab */
  onChange: ( newTab: string ) => void;
  /** Collections of tab objects */
  tabs: ITab [];
}
