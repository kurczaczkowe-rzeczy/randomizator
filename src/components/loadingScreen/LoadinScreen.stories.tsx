import { Story, Meta } from '@storybook/react';

import Component from '.';

export default{
  title: 'components/LoadingScreen',
  component: Component,
} as Meta;

const Template: Story<any> = () => <Component />;

export const Default = Template.bind({});
