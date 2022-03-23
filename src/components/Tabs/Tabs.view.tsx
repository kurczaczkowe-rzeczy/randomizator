import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _includes from 'lodash/includes';

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

  const tabsLabels = _map( tabs, ({ label }) => label );
  const handleChange = useCallback(( event: ChangeEvent< unknown > | null, newValue: string ): void => {
    setValue( newValue );
    onTabChange( newValue );
  }, [ onTabChange ]);

  useEffect(() => {
    if ( _isEmpty( value ) || !_includes( tabsLabels, value )) {
      setValue( defaultTab );
    }
  }, [
    defaultTab,
    value,
    tabsLabels,
  ]);

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
