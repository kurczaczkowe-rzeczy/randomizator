import { IS_DEVELOPMENT_MODE } from 'constans';

import Card from 'components/card';
import FileContainer from 'components/fileContainer/FileContainer.container';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter';
import IconButton from 'components/iconButton';
import CopyText from 'components/copyText';
import Button from 'components/Button';
import Select from 'components/select';

import { ICreator } from './CreatorPage.types';
import classes from './creatorPage.module.scss';

/**
 * Page displaying panel for authenticated users
 */
const Creator = ({
  answersCounter,
  link,
  onRandomClick,
  logout,
  selectFormsProps,
  getAnswersToFile,
}: ICreator ): JSX.Element => (
  <div className={ classes.creator }>
    <div className={ classes.leftSpace }>
      <Card
        centerBody={ false }
        body={ (
          <div className={ classes.formNameWrapper }>
            <div className={ classes.rowGap }>
              <Select { ...selectFormsProps } />
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
        ) }
      />
      { IS_DEVELOPMENT_MODE && (
        <Button
          value="Pobierz odpowiedzi"
          onClick={ getAnswersToFile }
        />
      )}
      <FileContainer />
    </div>
    <div className={ classes.rightSpace }>
      <div className={ classes.inline }>
        <AnswersCounter counter={ answersCounter } />
        <IconButton
          value="Wyloguj się"
          icon="logout"
          onClick={ logout }
        />
      </div>
      <Card
        title="Wygląd formularza"
        body={ <Form preview /> }
      />
      <Card
        cardClass={ classes.fullWidth }
        title="Losowanie"
        body={ <Draw onRandomClick={ onRandomClick } /> }
      />
    </div>
  </div>
);

export default Creator;
