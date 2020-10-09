import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';

import FileContainer from 'components/fileContainer/FileContainer.container';
import FormDescription from 'components/formDescription/FormDescription.view';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter/AnswersCounter.view';
import IconButton from 'components/iconButton/IconButton.view';

import classes from './creatorPage.module.scss';

const Creator = ({
  onRandomClick,
  name,
  logout,
}) => (
  <div className={ classes.creator }>
    <div className={ classes.leftSpace }>
      <FormDescription content={ name } />
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
  name: PropTypes.string,
};

Creator.defaultProps = { name: '' };

export default Creator;
