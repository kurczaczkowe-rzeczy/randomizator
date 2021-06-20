import { Story, Meta } from '@storybook/react';

import Component from './Creator.view';
import mockData from './Creator.mock';
import { ICreator } from '.';

export default{
  title: 'pages/Creator',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<ICreator> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
