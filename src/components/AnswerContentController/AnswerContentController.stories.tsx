import { Story, Meta } from '@storybook/react';
import noop from 'lodash/noop';

import { answerControllerDecorator } from 'decorators';

import mockData, { defaultValues } from './AnswerContentController.mock';
import Component, { IAnswerContentController } from '.';

export default{
  title: 'components/AnswerContentController',
  component: Component,
  args: { ...mockData },
  decorators: [ ( Story ) => <div style={{ color: '#fff' }}><Story /></div>, answerControllerDecorator() ],
} as Meta;

const Template: Story<IAnswerContentController> = ( args ) => <Component { ...args } />;

export const Filled = Template.bind({});

export const Empty = Template.bind({});
Empty.args = { answer: '' };

export const Deleted = Template.bind({});
Deleted.decorators = [ answerControllerDecorator( noop, defaultValues ) ];
