import { DropzoneOptions } from 'react-dropzone';

export interface IFileContainer {
  /**
   * Store all files name that was accepted by Dropzone component.
   */
  fileName?: string;
  /**
   * Method trigger if files chosen via drag&drop or file browser has accepted formats.
   */
  onDropAccepted: DropzoneOptions[ 'onDropAccepted' ];
  /**
   * Method trigger if files chosen via drag&drop or file browser has not accepted formats.
   */
  onDropRejected: DropzoneOptions[ 'onDropRejected' ];
  /**
   * Methods clear list of chosen files.
   */
  onRemove: () => void;
  /**
   * Methods upload chosen files.
   */
  onSend: () => void;
  /** If `true` component should display warning. */
  shouldDisplayError: boolean;
}
