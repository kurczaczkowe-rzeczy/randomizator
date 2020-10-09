import React from 'react';
import PropTypes from 'prop-types';

import classes from './creatorPage.module.scss';

import Card from 'components/card/Card.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import FormDescription from 'components/formDescription/FormDescription.view';
import Form from 'components/form';
import Draw from 'components/draw';
import AnswersCounter from 'components/answersCounter/AnswersCounter.view';

const Creator = ({
  onRandomClick,
  name,
}) => (
  <div className={classes.creator}>
    <div className={classes.leftSpace}>
      <FormDescription content={name} />
      <FileContainer />
    </div>
    <div className={classes.rightSpace}>
      <AnswersCounter />
      <Card title="Wygląd formularza" body={<Form preview />} />
      <Card
        title="Losowanie"
        body={(
          <Draw onRandomClick={onRandomClick} />
        )}
      />
    </div>
  </div>
);

Creator.propTypes = {
  onRandomClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Creator.defaultProps = { name: '' };

export default Creator;
