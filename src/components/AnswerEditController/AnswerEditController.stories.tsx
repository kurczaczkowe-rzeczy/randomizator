import { Story, Meta } from '@storybook/react';

import { answerControllerDecorator } from 'decorators';
import { IAnswerRowController } from 'hooks/types';

import Component from '.';
import mockData from './AnswerEditController.mock';

export default{
  title: 'components/AnswerEditController',
  component: Component,
  args: mockData,
  decorators: [ answerControllerDecorator() ],
} as Meta;

const Template: Story<IAnswerRowController> = ( args ) => <Component { ...args } />;

export const AnswerEditController = Template.bind({});
AnswerEditController.storyName = 'AnswerEditController';
