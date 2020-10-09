import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import DescriptionIcon from '@material-ui/icons/Description';
import classNames from 'classnames';

import classes from './fileDropzone.module.scss';

const DropzoneView = ({
  onDropAccepted, onDropRejected, multiple, type,
}) => (
  <Dropzone
    multiple={ multiple }
    accept={ type }
    activeStyle={ classes.active }
    onDropAccepted={ onDropAccepted }
    onDropRejected={ onDropRejected }
  >
    { ({
      getRootProps, getInputProps, isDragActive,
    }) => (
      <div
        { ...getRootProps({ className: 'dropzone' }) }
        className={ classNames( classes.box, { [ classes.active ]: isDragActive })}
      >
        <input { ...getInputProps() } />
        <DescriptionIcon classes={{ root: classes.icon } } />
        { isDragActive
          ? ( <p>Tu upuść plik</p> )
          : (
            <>
              <p>Upuść tu plik lub kliknij, aby wybrać z listy</p>
              <p>Tylko pliki z rozszerzeniem CSV</p>
            </>
          )}
      </div>
    ) }
  </Dropzone>
);

DropzoneView.propTypes = {
  onDropAccepted: PropTypes.func.isRequired,
  onDropRejected: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  type: PropTypes.string,
};

DropzoneView.defaultProps = {
  multiple: false,
  type: '.csv',
};

export default DropzoneView;
