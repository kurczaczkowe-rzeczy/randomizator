import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormListView from 'components/formList/FormList.view';

const FormList = ({
  content, userID, forms, onFormIdChange,
}) => (
  <FormListView
    content={ content } userID={ userID } forms={ forms }
    onFormIdChange={ onFormIdChange }
  />
);

FormList.propTypes = {
  content: PropTypes.string.isRequired,
  forms: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  userID: PropTypes.string,
  onFormIdChange: PropTypes.func,
};

FormList.defaultProps = {
  userID: '',
  forms: [{ id: '', name: '' }],
  onFormIdChange: () => {},
};

const mapStateToProps = ( state ) => ({ forms: state.forms.forms });

export default connect( mapStateToProps )( FormList );

