import { ReactNode } from 'react';
import { StringOrNumber } from 'types';

export interface ITab {
  /** Specify content of panel */
  content?: ReactNode;
  /**
   * Describes the unique value associated with the tab. Based on this value specific tab panel
   * recognize it and display content.
   */
  index: StringOrNumber;
  /** The label element */
  label: ReactNode;
}

/** Method allows executing action on switching tab */
export type onTabChange = ( newTab: string ) => void;

export interface ITabs {
  /** Blocks possibility to switch tabs. */
  blockChangeTab?: boolean;
  /** Specify which tab is default selected */
  defaultTab: StringOrNumber;
  /** Method call after user click on any tab */
  onTabChange?: onTabChange;
  /** Collections of tab objects */
  tabs: ITab[];
}
