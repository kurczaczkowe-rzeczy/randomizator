import { Story, Meta } from '@storybook/react';

import Component, { IFileContainer } from '.';

export default{
  title: 'components/FileContainer',
  component: Component,
} as Meta;

const Template: Story<IFileContainer> = ( args ) => <Component { ...args } />;

export const Empty = Template.bind({});
Empty.args = { acceptedFileNames: []};
export const SomeFiles = Template.bind({});
Empty.args = { acceptedFileNames: [ 'plik.csv' ]};
