import { Story, Meta } from '@storybook/react';
import { answerControllerDecorator } from 'decorators';

import Component, { IAnswersWeightRow } from '.';
import mockData from 'components/AnswerWeightRow/AnswerWeightRow.mock';

export default{
  title: 'components/AnswerWeightRow',
  component: Component,
  args: mockData,
  decorators: [ answerControllerDecorator() ],
} as Meta;

const Template: Story<IAnswersWeightRow> = ( args ) => <Component { ...args } />;

export const AnswerWeightRow = Template.bind({});
AnswerWeightRow.storyName = 'AnswerWeightRow';
