import { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Card from 'components/card';

import Component, { IVirtualizedTable } from '.';
import mockData, { sortData } from './VirtualizedTable.mock';

export default{
  title: 'components/VirtualizedTable',
  component: Component,
  args: { ...mockData },
} as Meta;

const useStyles = makeStyles({
  style: {
    height: 600,

    '& > div': {
      flex: '1 1 auto',
      width: '100%',
    },
  },
});
/* eslint-disable */
const Template: Story<IVirtualizedTable> = ( args ) => {
  const [ rows, setRows ] = useState<IVirtualizedTable[ 'rows' ]>( args.rows );

  const onLoadMoreRows: IVirtualizedTable[ 'onLoadMoreRows' ] = ( params ) => {
    args.onLoadMoreRows( params );

    setTimeout(() => {
      const newRows = [ ...rows ];

      newRows.push( ...args.rows );

      setRows( newRows );
      // @ts-ignore
      promiseResolve();
    }, 5000 );

    let promiseResolve: ( value: ( PromiseLike<unknown> | unknown ) ) => void = () => {};

    return new Promise(( resolve ) => { promiseResolve = resolve; });
  };

  return (
    <Card
      body={ (
        <Component
          { ...args }
          onLoadMoreRows={ onLoadMoreRows }
          rows={ rows }
        />
      ) }
      cardClass={ useStyles().style }
    />
  );
};
/* eslint-enable */

export const Default = Template.bind({});
export const Sortable = Template.bind({});
export const WithOverscanRowCount = Template.bind({});

Sortable.args = { ...sortData };
WithOverscanRowCount.args = { overscanRowCount: 2 };
