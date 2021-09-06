import MUITab from '@material-ui/core/Tab';

import { ITab } from './Tab.types';

/**
 * Component description.
 */
export const Tab = ({
  label,
  selected = false,
  value,
  ...other
}: ITab ): JSX.Element => (
  <MUITab
    wrapped
    label={ label }
    value={ value }
    selected={ selected }
    { ...other }
  />
);

export default Tab;
