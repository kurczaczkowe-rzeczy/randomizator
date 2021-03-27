import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers/rootReducer';

import SelectView from './Select.view';
import { IOption, ISelectContainer } from './Select.types';

const Select = ({
  label,
  onFormIdChange: onChange,
}: ISelectContainer ): JSX.Element => {
  const [ valueForm, setValueForm ] = useState( '' );

  const defaultValue = useSelector(( state: RootState ) => state?.form.docID );
  const options = useSelector(( state: RootState ) => state?.forms.forms );

  const onMenuItemClick = ( option: IOption ): void => {
    setValueForm( option.name );
    onChange( option.id );
  };

  return (
    <SelectView
      name="forms"
      defaultValue={ defaultValue }
      label={ label }
      options={ options }
      value={ valueForm }
      onItemClick={ onMenuItemClick }
    />
  );
};

export default Select;
