import { ReactNode } from 'react';

import { ClassNameMap } from '@material-ui/styles';

export interface IClasses {
  /** Specify class applied to body wrapper element */
  body?: string;
  /** Specify class applied to content wrapper element */
  content?: string;
  /** Specify class applied to icon wrapper element */
  icon?: string;
  /** Specify class applied to title wrapper element */
  title?: string;
}

export interface IModal {
  /** Specify main content of *Modal* */
  body: ReactNode;
  /** Overrides or extends styles applied to component. See {@link IClasses} for details. */
  classes?: IClasses;
  /** Element that display above *Modal*. If not specified it doesn't display */
  icon?: ReactNode;
  /** Specify title of *Modal* */
  title: string;
}

export interface IModalWithControls extends IModal {
  /** This control open state of *Modal* */
  isModalOpen: boolean;
  /** Method called when click on backdrop */
  onClose: () => void;
}

export type LocalStylesMap = ClassNameMap<
  | 'modal'
  | 'separator'
  | 'contentWrapper'
  | 'iconWrapper'
  | 'titleWrapper'
  | 'bodyWrapper'
  | 'title'
  | 'withIcon'
>;
