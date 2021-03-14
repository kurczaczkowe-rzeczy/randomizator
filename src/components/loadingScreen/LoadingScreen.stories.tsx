import { Story, Meta } from '@storybook/react';

import Component from '.';

export default{
  title: 'components/LoadingScreen',
  component: Component,
} as Meta;

const Template: Story = () => <Component />;

export const Default = Template.bind({});
