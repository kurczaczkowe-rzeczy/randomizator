import { Story, Meta } from '@storybook/react';

import Component, { IPageContainer } from '.';
import mockData from './PageContainer.mock';

export default{
  title: 'components/PageContainer',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IPageContainer> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
