import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useLocaleString from 'hooks/useLocaleString';
import { IS_DEVELOPMENT_MODE } from 'constans';

import AnswersCounter from 'components/answersCounter';
import ButtonView from 'components/Button';
import Card from 'components/card';
import Draw from 'components/Draw';
import FileContainer from 'components/FileContainer';
import Form from 'components/form';
import FormChooser from 'components/FormChooser';

import { ICreator } from './Creator.types';
import useStyles from './Creator.styles';

/** Page contain panel with preview of form, drawing answers, select that provide form context
 * and link to actual form and provides possibility to upload answers. For admin additionally provides button
 * that allow download answers. */
export const Creator = ({
  selectedForm,
  fileContainerProps,
  onDownloadAnswers,
  onLogout,
}: ICreator ): JSX.Element => {
  const styles = useStyles();
  const getString = useLocaleString();

  return (
    <div className={ styles.root }>
      <div className={ styles.leftSpace }>
        <FormChooser />
        { IS_DEVELOPMENT_MODE && (
          <ButtonView
            value={ getString( 'getAnswers' ) }
            onClick={ onDownloadAnswers }
          />
        )}
        <FileContainer { ...fileContainerProps } />
      </div>
      <div className={ styles.rightSpace }>
        <div className={ styles.inline }>
          <AnswersCounter counter={ selectedForm.counter } />
          <ButtonView
            value={ getString( 'logout' ) }
            icon={ <ExitToAppIcon /> }
            onClick={ onLogout }
            variant="iconButton"
          />
        </div>
        <Card
          title={ getString( 'previewForm' ) }
          body={ <Form { ...selectedForm } preview /> }
        />
        <Draw />
      </div>
    </div>
  );
};

export default Creator;
