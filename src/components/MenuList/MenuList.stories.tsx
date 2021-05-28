import { Meta, Story } from '@storybook/react';

import Component from '.';
import mockData from './MenuList.mock';
import { IMenuList } from './MenuList.types';

export default{
  title: 'components/MenuList',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IMenuList> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
