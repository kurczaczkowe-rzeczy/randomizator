import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import useLocaleString from 'hooks/useLocaleString';
import { IS_DEVELOPMENT_MODE } from 'constans';

import AnswersCounter from 'components/answersCounter';
import ButtonView from 'components/Button';
import Card from 'components/card';
import CopyText from 'components/copyText';
import Draw from 'components/draw';
import FileContainer from 'components/FileContainer';
import Form from 'components/form';
import Select from 'components/select';

import { ICreator } from './CreatorPage.types';
import classes from './creatorPage.module.scss';

/**
 * Page displaying panel for authenticated users
 */
const Creator = ({
  answersCounter,
  fileContainerProps,
  link,
  selectFormsProps,
  onDownloadAnswers,
  onDrawClick,
  onGoToForm,
  onLogout,
}: ICreator ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <div className={ classes.creator }>
      <div className={ classes.leftSpace }>
        <Card
          centerBody={ false }
          body={ (
            <div className={ classes.formNameWrapper }>
              <div className={ classes.rowGap }>
                <Select { ...selectFormsProps } />
              </div>
              <div className={ classes.linkWrapper }>
                <div className={ classes.openInNewIconWrapper } title={ getString( 'openFormLink' ) }>
                  <OpenInNewIcon classes={{ root: classes.openInNewIcon }} onClick={ onGoToForm } />
                </div>
                <CopyText
                  text={ link }
                  content={ (
                    <p className={ classes.copyText }>
                      { link }
                    </p>
                  ) }
                />
              </div>
            </div>
          ) }
        />
        { IS_DEVELOPMENT_MODE && (
          <ButtonView
            value={ getString( 'getAnswers' ) }
            onClick={ onDownloadAnswers }
          />
        )}
        <FileContainer { ...fileContainerProps } />
      </div>
      <div className={ classes.rightSpace }>
        <div className={ classes.inline }>
          <AnswersCounter counter={ answersCounter } />
          <ButtonView
            value={ getString( 'logout' ) }
            icon={ <ExitToAppIcon /> }
            onClick={ onLogout }
            variant="iconButton"
          />
        </div>
        <Card
          title={ getString( 'previewForm' ) }
          body={ <Form preview /> }
        />
        <Card
          cardClass={ classes.fullWidth }
          title={ getString( 'draw' ) }
          body={ <Draw onRandomClick={ onDrawClick } /> }
        />
      </div>
    </div>
  );
};

export default Creator;
