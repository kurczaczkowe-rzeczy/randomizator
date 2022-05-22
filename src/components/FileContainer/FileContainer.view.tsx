import _includes from 'lodash/includes';

import useTypedSelector from 'hooks/useTypedSelector';
import Card from 'components/card';
import Dropzone from 'components/Dropzone/Dropzone.view';
import FileList from 'components/fileList/FileList.view';
import { CARDS } from 'constans';

import { IFileContainer } from './FileContainer.types';

const FileContainer = ({
  acceptedFileNames,
  onDropAccepted,
  onDropRejected,
  onRemove,
  onSend,
}: IFileContainer ): JSX.Element => {
  /* ToDo: move this line to card and in Card component change isLoading property to cardName.
      Based on cardName I can display loader per Card.
      Also I can leave isLoading and move line below to Card component and pass new property cardName
      to Card for display loader and if isLoading is passed override loading state even passed cardName
   */
  const isLoading = useTypedSelector(({ global: { bindToCard }}) => _includes( bindToCard, CARDS.FILE_DROPZONE ));

  return (
    <Card
      body={ (
        <>
          <Dropzone onDropAccepted={ onDropAccepted } onDropRejected={ onDropRejected } />
          <FileList files={ acceptedFileNames } onRemove={ onRemove } onSend={ onSend } />
        </>
      ) }
      isLoading={ isLoading }
      fullWidthBody
      transparent
    />
  );
};

export default FileContainer;
