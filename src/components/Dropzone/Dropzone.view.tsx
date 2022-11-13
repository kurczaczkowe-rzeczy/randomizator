import Dropzone, { DropzoneProps } from 'react-dropzone';
import classNames from 'classnames';

import DescriptionIcon from '@material-ui/icons/Description';

import useLocalize from 'hooks/useLocalize';

import useStyles from './Dropzone.styles';

export const DropzoneView = ({
  multiple = false,
  accept = '.csv',
  onDropAccepted,
  onDropRejected,
}: DropzoneProps ): JSX.Element => {
  const localize = useLocalize();
  const styles = useStyles();

  return (
    <Dropzone
      multiple={ multiple }
      accept={ accept }
      onDropAccepted={ onDropAccepted }
      onDropRejected={ onDropRejected }
    >
      { ({
        getRootProps,
        getInputProps,
        isDragActive,
      }): JSX.Element => (
        <div
          { ...getRootProps({ className: 'Dropzone' }) }
          className={ classNames( styles.box, { [ styles.active ]: isDragActive }) }
        >
          <input { ...getInputProps() } />
          <DescriptionIcon classes={{ root: styles.icon }} />
          { isDragActive
            ? <p>{ localize( 'dropzoneDropFile' )}</p>
            : (
              <>
                <p>{ localize( 'dropzoneSelectFile' )}</p>
                <p>{ localize( 'dropzoneOnlyCSV' )}</p>
              </>
            )}
        </div>
      )}
    </Dropzone>
  );
};

export default DropzoneView;
