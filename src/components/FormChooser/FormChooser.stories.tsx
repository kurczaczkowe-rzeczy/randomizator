import { Story, Meta } from '@storybook/react';

import Component from './FormChooser.view';
import { IFormChooser } from '.';
import mockData from './FormChooser.mock';

export default{
  title: 'components/FormChooser',
  component: Component,
  args: { ...mockData },
} as Meta;

const Template: Story<IFormChooser> = ( args ) => <Component { ...args } />;

export const FormChooser = Template.bind({});
FormChooser.storyName = 'FormChooser';
