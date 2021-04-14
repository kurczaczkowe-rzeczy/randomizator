import { ReactNode } from 'react';

import { ClassNameMap } from '@material-ui/styles';

export interface IClasses {
  /** Specify class applied to body wrapper element */
  body: string;
  /** Specify class applied to content wrapper element */
  content: string;
  /** Specify class applied to icon wrapper element */
  icon: string;
  /** Specify class applied to title wrapper element */
  title: string;
}

export interface IModal {
  /** Specify main content of modal */
  body: ReactNode;
  /** Overrides or extends styles applied to component. See {@link IClasses} for details. */
  classes?: IClasses;
  /** Element that display above modal. If not specified it doesn't display */
  icon?: ReactNode;
  /** Specify title of modal */
  title: string;
}

export interface IModalWithControls extends IModal {
  /** This control open state of modal */
  isModalOpen: boolean;
  /** Method called when click on backdrop */
  onClose: () => void;
}

type classes = ClassNameMap<
  | 'modal' | 'separator' | 'contentWrapper'
  | 'iconWrapper' | 'titleWrapper' | 'bodyWrapper'
  | 'title' | 'withIcon'
>;

interface IClassesWithOverrides {
  /** Class overrides or extend local styles */
  overrides: IClasses | undefined;
  /** Local styles applied to  */
  styles: classes;
  /** If is ```true``` icon is display above modal content and content is slightly moved */
  withIcon: boolean;
}

export type classesOverrides = ( args: IClassesWithOverrides ) => classes;
