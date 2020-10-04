import Description from 'components/description/Description.view';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card/Card.view';
import Form from 'components/form';
import classes from './guestPage.module.scss';

const GuestPageView = ({
  creatorName,
  formName,
  sendFormFunction,
}) => (
  <div className={classes.guest}>
    <div className={ classes.description }>
      <Description label="Twórca" content={creatorName} />
      <Description label="Formularz" content={formName} />
    </div>
    <Card title="FORMULARZ" body={<Form sendFormFunction={sendFormFunction} />} />
  </div>
);

GuestPageView.propTypes = {
  creatorName: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  sendFormFunction: PropTypes.func,
};

GuestPageView.defaultProps = { sendFormFunction: () => {} };

export default GuestPageView;
