import { Story, Meta } from '@storybook/react';
import { answerControllerDecorator } from 'decorators';

import Component, { IAnswerRow } from '.';
import mockData from './AnswerRow.mock';

export default{
  title: 'components/AnswerRow',
  component: Component,
  args: mockData,
  decorators: [ answerControllerDecorator() ],
} as Meta;

const Template: Story<IAnswerRow> = ( args ) => <Component { ...args } />;

export const AnswerWeightRow = Template.bind({});
AnswerWeightRow.storyName = 'AnswerWeightRow';
