import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import DescriptionIcon from '@material-ui/icons/Description';

import classes from './fileDropzone.module.scss';

const DropzoneView = ({
  onDropAccepted, multiple, type,
}) => (
  <div>
    <Dropzone
      multiple={ multiple }
      accept={type}
      activeStyle={classes.active}
      onDropAccepted={ onDropAccepted }
    >
      { ({
        getRootProps, getInputProps, isDragActive,
      }) => (
        <div
          { ...getRootProps({ className: 'dropzone' }) }
          className={
            [ classes.box, isDragActive && classes.active ]
              .join( ' ' )
          }
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
  </div>
);

DropzoneView.propTypes = {
  onDropAccepted: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  type: PropTypes.string,
};

DropzoneView.defaultProps = {
  multiple: false,
  type: '.csv',
};

export default DropzoneView;
