import { Story, Meta } from '@storybook/react';

import Component, { IFileContainer } from '.';
import mockData from './FileContainer.mock';

export default{
  title: 'components/FileContainer',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IFileContainer> = ( args ) => <Component { ...args } />;

export const Empty = Template.bind({});
Empty.args = { fileName: undefined };

export const WithFiles = Template.bind({});
