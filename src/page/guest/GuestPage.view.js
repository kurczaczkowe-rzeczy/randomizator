import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import Form from 'components/form';
import CreatorDescription from 'components/creatorDescription/CreatorDescription.view';
import FormDescription from 'components/formDescription/FormDescription.view';

import classes from './guestPage.module.scss';

const GuestPageView = ({
  creatorName,
  formName,
  onSubmit,
}) => (
  <div className={ classes.guest }>
    <div className={ classes.description }>
      <CreatorDescription content={ creatorName } />
      <FormDescription content={ formName } />
    </div>
    <Card title="FORMULARZ" body={ <Form onSubmit={ onSubmit } /> } />
  </div>
);

GuestPageView.propTypes = {
  creatorName: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

GuestPageView.defaultProps = { onSubmit: () => {} };

export default GuestPageView;
