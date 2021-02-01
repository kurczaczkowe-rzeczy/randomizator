import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import FileItem from './components/fileItem/FileItem.view';

// ToDo change to FileItem util
const FileList = ({
  files,
  onSend,
  onRemove,
}) => files.map(( file ) => (
  <FileItem
    key={ `file-${ uuid() }` }
    displayName={ file }
    onSend={ onSend }
    onRemove={ onRemove }
  />
));

FileList.propTypes = {
  files: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

FileList.defaultProps = {};

export default FileList;
