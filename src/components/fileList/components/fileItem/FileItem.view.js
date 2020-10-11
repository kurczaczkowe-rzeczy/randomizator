import React from 'react';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './fileItem.module.scss';

const FileItem = ({
  displayName,
  onRemove,
  onSend,
}) => (
  <div className={ classes.file }>
    <p>{displayName}</p>
    <div>
      <CloudUploadIcon classes={{ root: classes.icon }} onClick={ onSend } />
      <DeleteIcon classes={{ root: classes.icon }} onClick={ onRemove } />
    </div>
  </div>
);

FileItem.propTypes = {
  displayName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default FileItem;
