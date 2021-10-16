import { FormProvider, useForm } from 'react-hook-form';
import { StoryContext } from '@storybook/addons';

import { IAnswersValues } from 'hooks/types';

/**
 * Decorator type for control answer.
 * @param callback allows runs code block with story context,
 * @return story decorator function that allows customize story render.
 * */
type AnswerControllerDecorator = ( callback?: ( context: StoryContext ) => void ) => <
  StoryFnReturnType extends JSX.Element = JSX.Element,
>( Story: () => StoryFnReturnType, context: StoryContext ) => JSX.Element;

/**
 * This decorator provide useForm from react-hook-form to story and allow use callback as side effect.
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
