import React from 'react';
import PropTypes from 'prop-types';

import classes from './creatorPage.module.scss';

import Card from 'components/card/Card.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import FormDescription from 'components/formDescription/FormDescription.view';
import Form from 'components/form';
import Draw from 'components/draw';

const Creator = ({
  onRandomClick,
  loadedData,
  name,
}) => (
  <div className={classes.page}>
    <div className={classes.leftSpace}>
      <FormDescription content={name} />
      <FileContainer />
    </div>
    <div className={classes.rightSpace}>
      <Card title="Wygląd formularza" body={<Form preview />} />
      <Card
        title="Losowanie"
        body={(
          <Draw loadedData={loadedData} onRandomClick={onRandomClick} />
        )}
      />
    </div>
  </div>
);

Creator.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Creator.defaultProps = { name: '' };

export default Creator;
