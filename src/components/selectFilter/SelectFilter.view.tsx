import { WithContext as ReactTags } from 'react-tag-input';
import _noop from 'lodash/noop';

import { ISelectFilter } from './SelectFilter.types';
import './selectFilter.scss';
import useLocaleString from '../../hooks/useLocaleString';

export const SelectFilter = ({
  tags,
  delimiters,
  handleDelete = _noop,
  handleAddition = _noop,
  handleDrag = _noop,
  handleTagClick = _noop,
}: ISelectFilter ): JSX.Element => {
  const getString = useLocaleString();

  return (
    <ReactTags
      autofocus={ false }
      inputFieldPosition="top"
      placeholder={ getString( 'typeFilterElements' ) }
      tags={ tags }
      delimiters={ delimiters }
      handleDelete={ handleDelete }
      handleAddition={ handleAddition }
      handleDrag={ handleDrag }
      handleTagClick={ handleTagClick }
    />
  );
};

export default SelectFilter;
