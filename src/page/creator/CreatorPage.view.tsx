import _noop from 'lodash/noop';

import Card from 'components/card/Card.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import FormList from 'components/formList';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter';
import IconButton from 'components/iconButton/IconButton.view';
import CopyText from 'components/copyText';

import classes from './creatorPage.module.scss';
import Button from 'components/button/Button.view';

export interface ICreator{
  /**
   * Number of form answers
   */
  answersCounter: number;
  /**
   * Method for convert answers to csv file
   */
  getAnswersToFile: () => void;
  /**
   * Link to current form
   */
  link: string;
  /**
   * Method for sing out users
   */
  logout: () => void;
  /**
   * Method for change current displays form
   */
  onFormIdChange?: ( formID: string ) => void;
  /**
   * Method for draw answers
   */
  onRandomClick: () => void;
}

/**
 * Page displaying panel for authenticated users
 */
const Creator = ({
  answersCounter,
  link,
  onRandomClick,
  logout,
  onFormIdChange = _noop,
  getAnswersToFile,
}: ICreator ): JSX.Element => (
  <div className={ classes.creator }>
    <div className={ classes.leftSpace }>
      <Card
        body={ (
          <div className={ classes.formNameWrapper }>
            <FormList
              label="Nazwa aktywnego formularza"
              classes={ classes.rowGap }
              onFormIdChange={ onFormIdChange }
            />
            <CopyText
              text={ link }
              content={ (
                <p className={ classes.copyText }>
                  {link}
                </p>
              ) }
            />
          </div>
        ) }
      />
      <Button
        type="button"
        value="Pobierz odpowiedzi"
        onClick={ getAnswersToFile }
      />
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
        title="Losowanie"
        body={ <Draw onRandomClick={ onRandomClick } /> }
      />
    </div>
  </div>
);

export default Creator;
