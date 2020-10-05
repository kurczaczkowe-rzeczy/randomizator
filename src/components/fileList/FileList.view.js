import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import FileItem from 'components/fileList/components/fileItem/FileItem.view';

const FileList = ({
  files, onSend, onRemove,
}) => files.map(( file ) => (
  <FileItem
    key={ `file-${ uuid() }` }
    onSend={ onSend }
    displayName={ file }
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
