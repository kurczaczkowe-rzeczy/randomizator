import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import classes from './fileDropzone.module.scss';

import DescriptionIcon from '@material-ui/icons/Description';
import FileItem from 'components/fileItem/FileItem.view';

const FileDropzone = () => {
  const [ acceptedFile, setAcceptedFile ] = useState([]);

  return (
    <div>
      <Dropzone
        onDropAccepted={ ( accepted ) => {
          setAcceptedFile( accepted );
        } }
        accept=".csv"
        multiple={ false }
        activeStyle={classes.active}
      >
        { ({ getRootProps, getInputProps }) => (
          <div { ...getRootProps() } className={classes.box}>
            <input { ...getInputProps() } />
            <DescriptionIcon classes={{ root: classes.icon } } />
            <p>Upuść tu plik lub kliknij aby wybrać z listy</p>
            <p>Tylko pliki z rozszerzeniem CSV</p>
          </div>
        ) }
      </Dropzone>
      { acceptedFile[ 0 ]
        ? <FileItem onSend={() => {}} displayName={acceptedFile[ 0 ].path} onRemove={() => {}} />
        : <FileItem onSend={() => {}} displayName="upload file" onRemove={() => {}} />}
    </div>
  );
};

export default FileDropzone;
