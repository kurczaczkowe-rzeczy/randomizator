import { Story, Meta } from '@storybook/react';

import Component, { ITabs } from '.';
import mockData from 'components/Tabs/Tabs.mock';

export default{
  title: 'components/Tabs',
  component: Component,
  args: mockData,
} as Meta;

const Template: Story<ITabs> = ( args ) => <Component { ...args } />;

export const Tabs = Template.bind({});
