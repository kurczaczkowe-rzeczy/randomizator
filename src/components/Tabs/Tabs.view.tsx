import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  Redirect,
} from 'react-router';
import { Link } from 'react-router-dom';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _includes from 'lodash/includes';
import _noop from 'lodash/noop';
import _last from 'lodash/last';
import _split from 'lodash/split';
import _toLower from 'lodash/toLower';
import _isEqual from 'lodash/isEqual';
import _replace from 'lodash/replace';

import MUITabs from '@material-ui/core/Tabs';
import MUITab from '@material-ui/core/Tab';

import TabPanel from 'components/TabPanel';
import toKebabCase from 'utils/toKebabCase';
import { ROUTES } from 'constans';

import { ITabs } from './Tabs.types';

/**
 * Component holds tabs and panel associated with them. If user click on specific tab panel should display
 * content associated with selected tab.
 */
export const Tabs = ({
  onTabChange = _noop,
  tabs,
  defaultTab,
  blockChangeTab,
}: ITabs ): JSX.Element => {
  const [ value, setValue ] = useState( toKebabCase( defaultTab ));
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();

  const tabsLabels = useMemo(() => _map( tabs, ({ label }) => label ), [ tabs ]);
  const handleChange = useCallback(( event: ChangeEvent< unknown > | null, newValue: string ): void => {
    /*
    * ToDo[issue #214]: This work perfect until we have some changes that block routing.
    *  When routing is blocked value is not updated so after click `ok` button in confirmation dialog
    *  we have the old state of value and page is switched to new route. When route was loaded for
    *  a little while is still active old tab but content of tab is not rendered because
    *  didn't match to route then tab is switched by effect and is active proper tab with rendered
    *  proper content.
    * */
    if ( blockChangeTab ) { return; }

    setValue( newValue );
    onTabChange( newValue );
  }, [ onTabChange, blockChangeTab ]);

  useEffect(() => {
    const lastPathPart = _last( _split( pathname, '/' )) ?? '';

    if (
      _isEmpty( value )
      || !_includes( _map( tabsLabels, toKebabCase ), value )
      || !_isEqual( lastPathPart, value )
    ) {

      setValue( lastPathPart === _toLower( _last( _split( url, '/' ))) ? toKebabCase( defaultTab ) : lastPathPart );
    }
  }, [
    defaultTab,
    value,
    tabsLabels,
    pathname,
    url,
  ]);

  const urlWithoutSlashOnTheEnd = useMemo(() => _replace(
    url,
    /\/$/,
    '',
  ), [ url ]);

  return (
    <>
      <MUITabs
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: 'none' }}}
        value={ value }
        onChange={ handleChange }
      >
        { _map( tabs, ( tab ) => (
          <MUITab
            key={ toKebabCase( tab.index ) }
            label={ tab.label }
            value={ toKebabCase( tab.index ) }
            component={ Link }
            to={ `${ urlWithoutSlashOnTheEnd }/${ toKebabCase( tab.index ) }` }
            onClick={ ( event ) => {
              if ( value === toKebabCase( tab.index )) {
                event.preventDefault();
              }
            } }
          />
        ))}
      </MUITabs>
      <Switch>
        <Route
          exact
          path={ path }
          key="default"
        >
          <TabPanel index={ toKebabCase( tabs[ 0 ].index ) } value={ value }>
            { tabs[ 0 ].content }
          </TabPanel>
        </Route>
        { _map( tabs, ( tab ) => (
          <Route
            path={ `${ path }/${ toKebabCase( tab.index ) }` }
            key={ toKebabCase( tab.index ) }
          >
            <TabPanel index={ toKebabCase( tab.index ) } value={ value }>
              { tab.content }
            </TabPanel>
          </Route>
        ))}
        <Redirect from="/*" to={ ROUTES.notFound } />
      </Switch>
    </>
  );
};

export default Tabs;
