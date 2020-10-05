import React from 'react';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from 'components/fileList/components/fileItem/fileItem.module.scss';

const FileItem = ({
  displayName, onRemove, onSend,
}) => (
  <div className={classes.file}>
    <p>{displayName}</p>
    <div>
      <CloudUploadIcon onClick={onSend} classes={{ root: classes.icon } } />
      <DeleteIcon onClick={onRemove} classes={{ root: classes.icon } } />
    </div>
  </div>
);

FileItem.propTypes = {
  displayName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default FileItem;
