import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import IconButton from 'components/iconButton/IconButton.view';
import FileContainer from 'components/fileContainer/FileContainer.container';
import CreatorDescription from 'components/creatorDescription/CreatorDescription.view';
import classes from './creatorPage.module.scss';
import Form from 'components/form';
import Draw from 'components/draw';

const Creator = ({
  result, onRandomClick, loadedData, name,
}) => (
  <div className={classes.page}>
    <div className={classes.leftSpace}>
      <CreatorDescription content={name} />
      <FileContainer />
    </div>
    <div className={classes.rightSpace}>
      <Card title="Wygląd formularza" body={<Form preview />} />
      <Card
        title="Losowanie"
        body={(
          <Draw loadedData={loadedData} onRandomClick={onRandomClick} result={result} />
        )}
      />
    </div>
  </div>
);

Creator.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  result: PropTypes.objectOf( PropTypes.any ).isRequired,
  onRandomClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Creator.defaultProps = { name: 'Ziemniaczek' };

export default Creator;
