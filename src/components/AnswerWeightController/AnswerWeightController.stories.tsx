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
  argTypes: { edit: { table: { disable: true }}},
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
