import { connect } from 'react-redux';
import _noop from 'lodash/noop';

import SelectUI from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import {
  prepareID,
  createOptions,
  getValue,
} from './Select.utils';
import useStyle from './Select.styles';

interface IOptions {
  id: string;
  name: string;
}

interface ISelect {
  defaultValue?: string;
  label?: string;
  onClose?: () => void;
  onItemClick?: () => void;
  onOpen?: () => void;
  open?: boolean;
  options?: IOptions[];
  valueForm?: string;
}

const Select = ({
  open = false,
  valueForm = '',
  defaultValue = '',
  label = '',
  options = [{ id: '', name: '' }],
  onClose = _noop,
  onItemClick = _noop,
  onOpen = _noop,
}: ISelect ): JSX.Element => {
  const styles = useStyle();
  const selectClasses = {
    root: styles.selected,
    icon: styles.icon,
    select: styles.select,
  };
  const menuProps = {
    classes: {
      paper: styles.paper,
      list: styles.list,
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id={ prepareID( label ) }
        classes={{ root: styles.label }}
      >
        {/* ToDo refactor this */}
        {label}
        :
      </InputLabel>
      <SelectUI
        disableUnderline
        open={ open }
        value={ getValue(
          options,
          valueForm,
          defaultValue,
        ) }
        classes={ selectClasses }
        MenuProps={ menuProps }
        onClose={ onClose }
        onOpen={ onOpen }
        labelId={ prepareID( label ) }
      >
        { createOptions(
          options,
          styles,
          onItemClick,
        ) }
      </SelectUI>
    </FormControl>
  );
};

const mapStateToProps = ( state: any ): any => ({
  defaultValue: state.form.docID,
  options: state.forms.forms,
});

export default connect( mapStateToProps )( Select );
