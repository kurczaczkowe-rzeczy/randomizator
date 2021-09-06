import { Story, Meta } from '@storybook/react';

import Component, { ITab } from '.';
import mockData from './Tab.mock';

export default{
  title: 'components/Tab',
  component: Component,
  args: mockData,
} as Meta;

const Template: Story<ITab> = ( args ) => <div style={{ color: '#771e76' }}><Component { ...args } /></div>;

export const Inactive = Template.bind({});

export const Active = Template.bind({});
Active.args = { selected: true };
