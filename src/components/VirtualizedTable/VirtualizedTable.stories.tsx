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

const Template: Story<IVirtualizedTable> = ( args ) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [ rows, setRows ] = useState<IVirtualizedTable[ 'rows' ]>( args.rows );

  const onLoadMoreRows: IVirtualizedTable[ 'onLoadMoreRows' ] = ( params ) => {
    args.onLoadMoreRows( params );

    setTimeout(() => {
      const newRows = [ ...rows ];

      newRows.push( ...args.rows );

      setRows( newRows );

      promiseResolve( undefined );
    }, 500 );

    let promiseResolve: ( value: ( PromiseLike<unknown> | unknown )) => void = () => {};

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

export const Default = Template.bind({});

export const Sortable = Template.bind({});
Sortable.args = { ...sortData };

export const WithOverscanRowCount = Template.bind({});
WithOverscanRowCount.args = { overscanRowCount: 2 };