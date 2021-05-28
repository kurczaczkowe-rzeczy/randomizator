import { Meta, Story } from '@storybook/react';

import Component from '.';
import mockData from './MenuItem.mock';
import { IInteractiveMenuItem } from './MenuItem.types';

export default{
  title: 'components/MenuItem',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IInteractiveMenuItem> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
export const Active = Template.bind({});

Active.args = { active: true };
