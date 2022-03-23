import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import _includes from 'lodash/includes';

import { IAnswerRowController, IAnswerController } from 'hooks/types';
import { RootState } from 'store/reducers/rootReducer';

/**
 * Hook provide access to form context created by useForm in the parent component. From this context hook get values
 * of answer and shared them to component when this hook is used. Also shared edit state from associated answer stored
 * in redux store.
 *
 * @param answerIndex specify answer index in array field.
 * @return {@link IAnswerController}
 */
const useAnswerController = ( answerIndex: IAnswerRowController[ 'answerIndex' ]): IAnswerController => {
  const { register, getValues } = useFormContext();

  const {
    id,
    weight,
    answerID,
  } = getValues( `answers.${ answerIndex }` );
  const edit = useSelector(( state: RootState ) => _includes( state.answersManager.editedAnswers, id ));

  return {
    id,
    answerID,
    register,
    edit,
    weight,
  };
};

export default useAnswerController;
