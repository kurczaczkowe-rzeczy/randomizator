import { IAnswersValues } from 'components/AnswersWeightManagerTable/AnswersWeightManagerTable.utils';
import { FormProvider, useForm } from 'react-hook-form';
import { Story, Meta } from '@storybook/react';
import { setEditedAnswer, unsetEditedAnswer } from 'store/actions/answersManagerActions';

import Component, { IAnswerWeightController } from '.';
import mockData from './AnswerWeightController.mock';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
} as Meta;

const Template: Story<IAnswerWeightController & { edit: boolean }> = ( args ) => {
  const methods = useForm< IAnswersValues >({ defaultValues: { answers: [{ weight: 5, answerID: 'aWd2fg4h57r' }]}});
  const dispatch = useDispatch();

  useEffect(() => {
    const action = args.edit ? setEditedAnswer : unsetEditedAnswer;

    dispatch( action( 'aWd2fg4h57r' ));
    // eslint-disable-next-line react/destructuring-assignment
  }, [ args.edit, dispatch ]);

  return (
    <form>
      <FormProvider { ...methods }>
        <Component { ...args } />
      </FormProvider>
    </form>
  );
};

export const View = Template.bind({});

export const Edit = Template.bind({});
Edit.args = { edit: true };
