import { Story, Meta } from '@storybook/react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import noop from 'lodash/noop';

import { answerControllerDecorator, dispatchDecorator } from 'decorators';
import { clearAnswerManager, setEditedAnswer } from 'store/actions/answersManagerActions';
import { AnswersManagerAction, IAnswersManagerState } from 'store/types';

import Component, { IAnswerRow } from '.';
import mockData, { defaultValues } from './AnswerRow.mock';

const useStyles = makeStyles({ root: { position: 'relative', '& div::before': { top: '49%' }}});

export default{
  title: 'components/AnswerRow',
  component: Component,
  args: { ...mockData },
  decorators: [ ( Story ) => <div className={ useStyles().root }><Story /></div> ],
} as Meta;

const Template: Story<IAnswerRow> = ( args ) => <Component { ...args } />;

export const Default = Template.bind({});
Default.decorators = [ answerControllerDecorator() ];

export const Deleted = Template.bind({});
Deleted.decorators = [ answerControllerDecorator( noop, defaultValues ) ];

const editDecorator = dispatchDecorator< IAnswersManagerState, AnswersManagerAction >(( dispatch ) => {
  dispatch( setEditedAnswer( 'aWd2fg4h57r' ));
}, clearAnswerManager );

export const Edit = Template.bind({});
Edit.decorators = [ answerControllerDecorator(), editDecorator ];

export const EditDeleted = Template.bind({});
EditDeleted.decorators = [ answerControllerDecorator( noop, defaultValues ), editDecorator ];
