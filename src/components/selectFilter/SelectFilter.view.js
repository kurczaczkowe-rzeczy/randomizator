import React from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';

import './selectFilter.modele.scss';

const SelectFilter = ({
  tags,
  delimiters,
  handleDelete,
  handleAddition,
  handleDrag,
  handleTagClick,
}) => (
  <ReactTags
    tags={ tags }
    delimiters={ delimiters }
    handleDelete={ handleDelete }
    handleAddition={ handleAddition }
    handleDrag={ handleDrag }
    handleTagClick={ handleTagClick }
    inputFieldPosition="top"
  />
);

SelectFilter.propTypes = {
  delimiters: PropTypes.arrayOf( PropTypes.number.isRequired ),
  handleAddition: PropTypes.func,
  handleDelete: PropTypes.func,
  handleDrag: PropTypes.func,
  handleTagClick: PropTypes.func,
  tags: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

SelectFilter.defaultProps = {
  delimiters: [],
  tags: [],
  handleDelete: () => {},
  handleAddition: () => {},
  handleDrag: () => {},
  handleTagClick: () => {},
};

export default SelectFilter;
