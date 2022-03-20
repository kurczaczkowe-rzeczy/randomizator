import {
  ChangeEvent,
  useCallback,
  useState,
} from 'react';
import _map from 'lodash/map';

import MUITabs from '@material-ui/core/Tabs';
import MUITab from '@material-ui/core/Tab';

import TabPanel from 'components/TabPanel';

import { ITabs } from './Tabs.types';
import noop from 'lodash/noop';

/**
 * Component holds tabs and panel associated with them. If user click on specific tab panel should display
 * content associated with selected tab.
 */
export const Tabs = ({
  onTabChange = noop,
  tabs,
  defaultTab,
}: ITabs ): JSX.Element => {
  const [ value, setValue ] = useState( defaultTab );

  const handleChange = useCallback(( event: ChangeEvent< unknown > | null, newValue: string ): void => {
    setValue( newValue );
    onTabChange( newValue );
  }, [ onTabChange ]);

  return (
    <>
      <MUITabs
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: 'none' }}}
        value={ value }
        onChange={ handleChange }
      >
        { _map( tabs, ( tab ) => <MUITab key={ tab.index } label={ tab.label } value={ tab.index } /> )}
      </MUITabs>
      { _map( tabs, ( tab ) => (
        <TabPanel key={ tab.index } index={ tab.index } value={ value }>
          { tab.content }
        </TabPanel>
      ))}
    </>
  );
};

export default Tabs;
