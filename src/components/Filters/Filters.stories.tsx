import { Story, Meta } from '@storybook/react';

import Component, { IFilters } from '.';
import mockData from './Filters.mock';

export default{
  title: 'components/Filters',
  component: Component,
  args: mockData,
} as Meta;

const Template: Story<IFilters> = ( args ) => <Component { ...args } />;

export const RowOrder = Template.bind({});

export const ColumnOrder = Template.bind({});
ColumnOrder.args = { columnOrder: true };
