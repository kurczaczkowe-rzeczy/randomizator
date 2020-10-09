import React, { useState } from 'react';

import SelectFilterView from './SelectFilter.view';

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

const SelectFilter = () => {

  const [ tags, setTags ] = useState([]);

  const handleDelete = ( i ) => {
    setTags( tags.filter(( tag, index ) => index !== i ));
  };

  const handleAddition = ( tag ) => {
    setTags([ ...tags, tag ]);
  };

  const  handleDrag = (
    tag, currPos, newPos,
  ) => {
    const newTags = tags.slice();

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

SelectFilter.propTypes = {};

SelectFilter.defaultProps = {};

export default SelectFilter;
