import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectFilterView from './SelectFilter.view';
import {
  addTag, removeTag, setTags,
} from 'store/actions/drawAction';

const KeyCodes = {
  comma: 188,
  enter: 13,
  space: 32,
};

const delimiters = [
  KeyCodes.comma,
  KeyCodes.enter,
  KeyCodes.space,
];

const SelectFilter = ({
  addTag, removeTag, setTags, tags,
}) => {

  const handleDelete = ( i ) => {
    removeTag( i );
  };

  const handleAddition = ( tag ) => {
    addTag( tag );
  };

  const  handleDrag = (
    tag, currPos, newPos,
  ) => {
    const newTags = [ ...tags ];

    newTags.splice( currPos, 1 );
    newTags.splice(
      newPos, 0, tag,
    );

    setTags( newTags );
  };

  return (
    <SelectFilterView
      tags={ tags }
      delimiters={ delimiters }
      handleDelete={ handleDelete }
      handleAddition={ handleAddition }
      handleDrag={ handleDrag }
    />
  );
};

SelectFilter.propTypes = {
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf( PropTypes.object ).isRequired,
};

const mapStateToProps = ( state ) => ({ tags: state.draw.tags });

const mapDispatchToProps = ( dispatch ) => ({
  addTag: ( tag ) => dispatch( addTag( tag )),
  removeTag: ( index ) => dispatch( removeTag( index )),
  setTags: ( answers ) => dispatch( setTags( answers )),
});

export default connect( mapStateToProps, mapDispatchToProps )( SelectFilter );
