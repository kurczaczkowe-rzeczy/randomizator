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
import CopyLink from 'components/copyText';

const Creator = ({
  link,
  component,
  onRandomClick,
  logout,
  onFormIdChange,
}) => (
  <div className={ classes.creator }>
    <div className={ classes.leftSpace }>
      <Card
        cardClass={ classes.rowGap }
        body={ (
          <>
            <FormList
              label="Nazwa aktywnego formularza"
              onFormIdChange={ onFormIdChange }
            />
            <CopyLink
              link={ link }
              component={ component }
            />
          </>
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
  component: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  onFormIdChange: PropTypes.func,
};

Creator.defaultProps = { onFormIdChange: () => {} };

export default Creator;
