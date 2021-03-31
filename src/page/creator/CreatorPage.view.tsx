import _noop from 'lodash/noop';

import Card from 'components/card/Card.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import FormList from 'components/formList';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter';
import IconButton from 'components/iconButton/IconButton.view';
import CopyText from 'components/copyText';

import { ICreator } from 'page/creator/CreatorPage.types';

import classes from './creatorPage.module.scss';

/**
 * Page displaying panel for authenticated users
 */
const Creator = ({
  answersCounter,
  link,
  onRandomClick,
  logout,
  onFormIdChange = _noop,
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
                  { link }
                </p>
              ) }
            />
          </div>
        ) }
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
