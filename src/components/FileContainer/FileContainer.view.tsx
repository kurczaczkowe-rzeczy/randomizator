import Dropzone from 'components/Dropzone/Dropzone.view';
import FileList from 'components/fileList/FileList.view';

import { IFileContainer } from './FileContainer.types';

const FileContainer = ({
  acceptedFileNames,
  onDropAccepted,
  onDropRejected,
  onRemove,
  onSend,
}: IFileContainer ): JSX.Element => (
  <div>
    <Dropzone onDropAccepted={ onDropAccepted } onDropRejected={ onDropRejected } />
    <FileList files={ acceptedFileNames } onRemove={ onRemove } onSend={ onSend } />
  </div>
);

export default FileContainer;
