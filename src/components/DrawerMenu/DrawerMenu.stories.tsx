import { Meta, Story } from '@storybook/react';

import { IDrawerMenu } from 'components/DrawerMenu/DrawerMenu.types';

import Component from '.';
import mockData from './DrawerMenu.mock';

export default{
  title: 'components/DrawerMenu',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IDrawerMenu> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
