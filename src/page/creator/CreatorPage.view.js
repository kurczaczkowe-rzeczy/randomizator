import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import FormList from 'components/formList';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter/AnswersCounter.view';
import IconButton from 'components/iconButton/IconButton.view';

import classes from './creatorPage.module.scss';

const Creator = ({
  userID,
  onRandomClick,
  logout,
  onFormIdChange,
}) => (
  <div className={ classes.creator }>
    <div className={ classes.leftSpace }>
      <Card
        cardClass={ classes.baseLine }
        body={ (
          <FormList
            content="Nazwa aktywnego formularza"
            userID={ userID }
            onFormIdChange={ onFormIdChange }
          />
        ) }
      />
      <FileContainer />
    </div>
    <div className={ classes.rightSpace }>
      <div className={ classes.inline }>
        <AnswersCounter />
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

Creator.propTypes = {
  logout: PropTypes.func.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  userID: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

Creator.defaultProps = {
  userID: '',
  onFormIdChange: () => {},
};

export default Creator;
