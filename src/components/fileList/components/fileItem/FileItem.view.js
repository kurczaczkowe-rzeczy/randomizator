import React from 'react';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import Tooltip from '@material-ui/core/Tooltip';

import useLocalize from 'hooks/useLocalize';

import classes from './fileItem.module.scss';
// ToDo Move to global scope
const FileItem = ({
  displayName,
  error,
  onRemove,
  onSend,
}) => {
  const localize = useLocalize();

  return (
    <div className={ classes.file }>
      <p>{ displayName }</p>
      <div>
        {error && (
          <Tooltip
            arrow
            placement="top"
            title={ localize( 'someFieldNamesNotFound' ) }
            classes={{
              tooltip: classes.tooltip,
              arrow: classes.arrow,
            }}
          >
            <ErrorIcon classes={{ root: classes[ 'icon--error' ] }} />
          </Tooltip>
        )}
        <CloudUploadIcon classes={{ root: classes.icon }} onClick={ onSend } />
        <DeleteIcon classes={{ root: classes.icon }} onClick={ onRemove } />
      </div>
    </div>
  );
};

FileItem.propTypes = {
  displayName: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

FileItem.defaultProps = { error: false };

export default FileItem;
