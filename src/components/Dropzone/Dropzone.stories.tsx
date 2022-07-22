import { DropzoneProps } from 'react-dropzone';
import { Story, Meta } from '@storybook/react';

import Component from './Dropzone.view';

export default{
  title: 'components/Dropzone',
  component: Component,
} as Meta;

const Template: Story<DropzoneProps> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
