import Description from 'components/description/Description.view';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/card/Card.view';
import Form from 'components/form';
import classes from './guestPage.module.scss';

const GuestPageView = ({
  creatorName,
  formName,
  onSubmit,
}) => (
  <div className={classes.guest}>
    <div className={ classes.description }>
      <Description label="Twórca" content={creatorName} />
      <Description label="Formularz" content={formName} />
    </div>
    <Card title="FORMULARZ" body={<Form onSubmit={onSubmit} />} />
  </div>
);

GuestPageView.propTypes = {
  creatorName: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

GuestPageView.defaultProps = { onSubmit: () => {} };

export default GuestPageView;
