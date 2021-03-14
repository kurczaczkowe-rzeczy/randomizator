import { Story, Meta } from '@storybook/react';

import Component from '.';
import { IAnswersCounter } from './AnswersCounter.view';

export default{
  title: 'components/AnswersCounter',
  component: Component,
} as Meta;

const Template: Story<IAnswersCounter> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
Default.args = { counter: 0 };

