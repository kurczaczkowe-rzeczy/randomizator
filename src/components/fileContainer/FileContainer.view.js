import React from 'react';
import PropTypes from 'prop-types';

import Dropzone from 'components/dropzone/Dropzone.view';
import FileList from 'components/fileList/FileList.view';

const FileContainer = ({
  onDropAccepted, acceptedFile, onRemove, onSend,
}) => (
  <div>
    <Dropzone onDropAccepted={ onDropAccepted } />
    <FileList files={ acceptedFile } onRemove={ onRemove } onSend={ onSend } />
  </div>
);

FileContainer.propTypes = {
  acceptedFile: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onDropAccepted: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default FileContainer;
