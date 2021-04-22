import { Story, Meta } from '@storybook/react';

import Component from '.';

export default{
  title: 'components/Footer',
  component: Component,
} as Meta;

const Template: Story = ( args ) => <Component { ...args } />;

export const Footer = Template.bind({});
