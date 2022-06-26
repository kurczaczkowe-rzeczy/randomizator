import { Story, Meta } from '@storybook/react';

import Component, { ITabs } from '.';
import mockData from 'components/Tabs/Tabs.mock';

export default{
  title: 'components/Tabs',
  component: Component,
  args: { ...mockData },
} as Meta;

// ToDo: handle switching routing
const Template: Story<ITabs> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
export const WithBlockedTabSwitching = Template.bind({});

WithBlockedTabSwitching.args = {
  ...mockData,
  blockChangeTab: true,
};
