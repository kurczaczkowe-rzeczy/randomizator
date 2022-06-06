import { Story, Meta } from '@storybook/react';
import _noop from 'lodash/noop';

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
    dispatch( setDirtyAnswer( 5, {
      id: 'id-6',
      weight: 2,
      answerID: 'as5d132s',
    }));
    dispatch( setDirtyAnswer( 0, {
      id: 'id-1',
      weight: 10,
      answerID: 'qf23f325',
    }));
  }, clearAnswerManager ),
];

export const noAnswersChanged = Template.bind({});
noAnswersChanged.decorators =
  [ dispatchDecorator<IAnswersManagerState, AnswersManagerAction>( _noop, clearAnswerManager ) ];
