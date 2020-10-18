import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from 'components/select/Select.view';
import CopyLink from 'components/copyLink';

import classes from './formList.module.scss';

const FormList = ({
  label,
  forms,
  onFormIdChange,
}) => (
  <div className={ classes.formDetails }>
    <Select
      label={ label }
      options={ forms }
      onFormIdChange={ onFormIdChange }
    />
    <CopyLink />
  </div>
);

FormList.propTypes = {
  label: PropTypes.string.isRequired,
  forms: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onFormIdChange: PropTypes.func,
};

FormList.defaultProps = {
  forms: [{ id: '', name: '' }],
  onFormIdChange: () => {},
};

const mapStateToProps = ( state ) => ({ forms: state.forms.forms });

export default connect( mapStateToProps )( FormList );

