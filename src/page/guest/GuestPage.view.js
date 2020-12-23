import FormName from 'components/guestFormDescription/FormName.view';
import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card/Card.view';
import Form from 'components/form';
import CreatorDescription from 'components/creatorDescription/CreatorDescription.view';

import classes from './guestPage.module.scss';
import CopyText from 'components/copyText';
import TextBox from 'components/textBox/TextBox.view';

const GuestPageView = ({
  creatorName,
  formName,
  onSubmit,
}) => (
  <div className={ classes.guest }>
    <div className={ classes.description }>
      <Card
        cardClass={ classes.baseLine }
        body={ <CreatorDescription content={ creatorName } /> }
      />
      <Card
        id="formName"
        cardClass={ classes.baseLine }
        body={ (
          <FormName content={ (
            <CopyText
              text={ formName }
              content={ <TextBox>{formName}</TextBox> }
            />
          ) }
          />
        ) }
      />
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
