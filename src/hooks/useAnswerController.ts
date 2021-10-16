import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import _includes from 'lodash/includes';

import { IAnswer, IAnswerController } from 'hooks/types';
import { RootState } from 'store/reducers/rootReducer';

/**
 * Hook provide access to form context created by useForm in the parent component. From this context hook get values
 * of answer and shared them to component when this hook is used. Also shared edit state from associated answer stored
 * in redux store.
 *
 * @param answerIndex specify index of answer in array field.
 * @return {@link IAnswerController}
 */
const useAnswerController = ( answerIndex: IAnswer[ 'answerIndex' ]): IAnswerController => {
  const { register, getValues } = useFormContext();

  const { answerID, weight } = getValues().answers[ answerIndex ] || {};
  const edit = useSelector(( state: RootState ) => _includes( state.answersManager.editedAnswers, answerID ));

  return {
    answerID,
    register,
    edit,
    weight,
  };
};

export default useAnswerController;
