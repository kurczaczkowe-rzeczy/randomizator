import { Story, Meta } from '@storybook/react';

import { dispatchDecorator } from 'decorators';
import { clearAnswerManager, setDirtyAnswer } from 'store/actions/answersManagerActions';
import { AnswersManagerAction, IAnswersManagerState } from 'store/types';

import Component, { IAnswerListener } from '.';

export default{
  title: 'components/AnswerListener',
  component: Component,
} as Meta;

const Template: Story<IAnswerListener> = ( args ) => <Component { ...args } />;

export const someAnswersChanged = Template.bind({});
someAnswersChanged.decorators = [
  dispatchDecorator<IAnswersManagerState, AnswersManagerAction>(( dispatch ) => {
    dispatch( setDirtyAnswer( 5, { answerID: 'answerID-6', weight: 2 }));
    dispatch( setDirtyAnswer( 0, { answerID: 'answerID-1', weight: 10 }));
  }),
];

export const noAnswersChanged = Template.bind({});
noAnswersChanged.decorators = [
  dispatchDecorator<IAnswersManagerState, AnswersManagerAction>(( dispatch ) => {
    dispatch( clearAnswerManager());
  }),
];
