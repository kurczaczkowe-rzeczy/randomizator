import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addTag,
  removeTag,
  setTags,
} from 'store/actions/drawAction';
import { RootState } from 'store/reducers/rootReducer';

import {
  HandleAddition,
  HandleDelete,
  HandleDrag,
} from './SelectFilter.types';
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

const SelectFilter = (): JSX.Element => {
  const tags = useSelector(( state: RootState ) => state?.draw.tags );
  const dispatch = useDispatch();
  const handleDelete: HandleDelete = useCallback(( index ) => {
    dispatch( removeTag( index ));
  }, [ dispatch ]);

  const handleAddition: HandleAddition = useCallback(( tag ) => {
    dispatch( addTag( tag ));
  }, [ dispatch ]);

  const  handleDrag: HandleDrag = useCallback((
    tag, currPos, newPos,
  ) => {
    const newTags = [ ...tags ];

    newTags.splice( currPos, 1 );
    newTags.splice(
      newPos, 0, tag,
    );

    dispatch( setTags( newTags ));
  }, [ dispatch, tags ]);

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

export default SelectFilter;
