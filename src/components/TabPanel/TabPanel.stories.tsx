import { Story, Meta } from '@storybook/react';

import Component, { ITabPanel } from '.';
import mockData from './TabPanel.mock';

export default{
  title: 'components/TabPanel',
  component: Component,
  args: mockData,
} as Meta;

const Template: Story<ITabPanel> = ( args ) => <Component { ...args } />;

export const TabPanel = Template.bind({});
