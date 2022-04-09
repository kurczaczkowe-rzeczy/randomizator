import { useFormContext, useWatch } from 'react-hook-form';
import _includes from 'lodash/includes';

import { IAnswerRowController, IAnswerController } from 'hooks/types';
import useTypedSelector from 'hooks/useTypedSelector';

/**
 * Hook provide access to form context created by useForm in the parent component. From this context hook get values
 * of answer and shared them to component when this hook is used. Also shared edit state from associated answer stored
 * in redux store.
 *
 * @param answerIndex specify answer index in array field.
 * @return {@link IAnswerController}
 */
const useAnswerController = ( answerIndex: IAnswerRowController[ 'answerIndex' ]): IAnswerController => {
  const { register, control } = useFormContext();

  const {
    id,
    weight,
    answerID,
  } = useWatch({ control, name: `answers.${ answerIndex }` });
  const edit = useTypedSelector(({ answersManager: { editedAnswers }}) => _includes( editedAnswers, id ));

  return {
    id,
    answerID,
    register,
    edit,
    weight,
  };
};

export default useAnswerController;
