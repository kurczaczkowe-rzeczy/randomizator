import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Story, Meta } from '@storybook/react';

import { answerControllerDecorator } from 'decorators';
import { setEditedAnswer, unsetEditedAnswer } from 'store/actions/answersManagerActions';
import { IAnswerRowController } from 'hooks/types';

import Component from '.';
import mockData from './AnswerWeightController.mock';

export default{
  title: 'components/AnswerWeightController',
  component: Component,
  args: mockData,
  argTypes: {
    edit: {
      description: 'Based on this value component display input or paragraph with value.' +
           ' This args is used only for story.',
      table: { type: { summary: 'boolean' }},
    },
  },
  decorators: [
    answerControllerDecorator(({ args: { edit }}) => {
      const dispatch = useDispatch();

      useEffect(() => {
        const action = edit ? setEditedAnswer : unsetEditedAnswer;

        dispatch( action( 'aWd2fg4h57r' ));
      }, [ edit, dispatch ]);
    }),
  ],
} as Meta;

const Template: Story<IAnswerRowController & { edit: boolean }> = ( args ) => <Component { ...args } />;

export const View = Template.bind({});

export const Edit = Template.bind({});
Edit.args = { edit: true };
