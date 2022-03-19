import { Story, Meta } from '@storybook/react';

import Component from './Dashboard.view';

export default{
  title: 'pages/Dashboard',
  component: Component,
} as Meta;

const Template: Story = ( args ) => <Component { ...args } />;

export const Empty = Template.bind({});
export const Filled = Template.bind({});
export const Loading = Template.bind({});
