/* eslint-disable react/no-multi-comp */
import { useEffect } from 'react';
import { Action as ReduxAction } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { FormProvider, useForm } from 'react-hook-form';
import { StoryContext } from '@storybook/addons';

import { IAnswersValues } from 'hooks/types';

// Types
/**
 * Function decorate story and allow you to add mocks, styling, logger and more.
 *
 * @param Story - Component used to show story.
 * @param context - Storybook bag with story context
 * */
type Decorator = < StoryFnReturnType extends JSX.Element = JSX.Element >
  ( Story: () => StoryFnReturnType, context: StoryContext ) => JSX.Element;

/**
 * Function decorate answers story and provide optional callback.
 *
 * @param callback allows runs code block with story context,
 * @return story decorator function that allows customize story render.
 * */
type AnswerControllerDecorator = ( callback?: ( context: StoryContext ) => void ) => Decorator;

type DispatchDecorator = <State, Action extends ReduxAction>
( callback: ( dispatch: ThunkDispatch<State, unknown, Action> ) => void ) => Decorator;

// Decorators
/**
 * This decorator provides useForm from react-hook-form to story and allow use callback as side effect.
 *
 * See {@link AnswerControllerDecorator} for more details about parameters and return value.
 *
 * @example  Use decorator without callback
 * export default{
 *   title: 'components/ExampleComponent',
 *   ...
 *   decorators: [ answerControllerDecorator() ],
 * } as Meta;
 *
 * @example  Use decorator with callback
 * export default{
 *   title: 'components/ExampleComponent',
 *   ...
 *   decorators: [
 *     answerControllerDecorator(( context ) => {
 *       const dispatch = useDispatch();
 *
 *       useEffect(() => { if ( context.args.edit ) { dispatch( action()); }});
 *     }),
 *   ],
 * } as Meta;
 */
export const answerControllerDecorator: AnswerControllerDecorator = ( callback ) => ( Story, context ) => {
  const methods = useForm< IAnswersValues >({ defaultValues: { answers: [{ weight: 5, answerID: 'aWd2fg4h57r' }]}});

  if ( callback ) { callback( context ); }

  return (
    <form>
      <FormProvider { ...methods }>
        <Story />
      </FormProvider>
    </form>
  );
};

/**
 * This decorator provides redux dispatcher to story component.
 * */
export const dispatchDecorator: DispatchDecorator = ( callback ) => ( Story ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    callback( dispatch );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Story />;
};
/* eslint-enable react/no-multi-comp */
