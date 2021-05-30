import { Story, Meta } from '@storybook/react';

import Component from './CreatorPage.view';
import mockData from './CreatorPage.mock';
import { ICreator } from '.';

export default{
  title: 'components/CreatorPage',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<ICreator> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
