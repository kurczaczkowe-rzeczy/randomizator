import { Story, Meta } from '@storybook/react';

import Component from '.';

export default{
  title: 'components/ProdReleaseModal',
  component: Component,
} as Meta;

const Template: Story = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
