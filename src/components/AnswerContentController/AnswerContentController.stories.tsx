import { Story, Meta } from '@storybook/react';

import Component, { IAnswerContentController } from '.';

export default{
  title: 'components/AnswerContentController',
  component: Component,
  args: { answer: <span style={{ color: '#fff' }}>Zawartość</span> },
} as Meta;

const Template: Story<IAnswerContentController> = ( args ) => <Component { ...args } />;

export const Filled = Template.bind({});

export const Empty = Template.bind({});
Empty.args = { answer: '' };
