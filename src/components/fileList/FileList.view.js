import React from 'react';
import PropTypes from 'prop-types';

import FileItem from 'components/fileList/components/fileItem/FileItem.view';

const FileList = ({
  files, onSend, onRemove,
}) => files.map(( file, index ) => (
  <FileItem
    key={ `file-${ index }` }
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
