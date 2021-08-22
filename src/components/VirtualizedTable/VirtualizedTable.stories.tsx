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

const Template: Story<IVirtualizedTable> = ( args ) => (
  <Card body={ <Component { ...args } /> } cardClass={ useStyles().style } />
);

export const Default = Template.bind({});
export const Sortable = Template.bind({});
export const WithOverscanRowCount = Template.bind({});

Sortable.args = { ...sortData };
WithOverscanRowCount.args = { overscanRowCount: 2 };
