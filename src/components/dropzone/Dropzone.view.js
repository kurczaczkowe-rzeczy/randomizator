import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import DescriptionIcon from '@material-ui/icons/Description';
import classNames from 'classnames';

import useLocaleString from 'hooks/useLocaleString';

import classes from './fileDropzone.module.scss';

const DropzoneView = ({
  multiple,
  type,
  onDropAccepted,
  onDropRejected,
}) => {
  const getString = useLocaleString();

  return (
    <Dropzone
      multiple={ multiple }
      accept={ type }
      activeStyle={ classes.active }
      onDropAccepted={ onDropAccepted }
      onDropRejected={ onDropRejected }
    >
      { ({
        getRootProps,
        getInputProps,
        isDragActive,
      }) => (
        <div
          { ...getRootProps({ className: 'dropzone' }) }
          className={ classNames( classes.box, { [ classes.active ]: isDragActive }) }
        >
          <input { ...getInputProps() } />
          <DescriptionIcon classes={{ root: classes.icon }} />
          { isDragActive
            ? ( <p>{ getString( 'dropzoneDropFile' ) }</p> )
            : (
              <>
                <p>{ getString( 'dropzoneSelectFile' ) }</p>
                <p>{ getString( 'dropzoneOnlyCSV' ) }</p>
              </>
            ) }
        </div>
      ) }
    </Dropzone>
  );
};

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
