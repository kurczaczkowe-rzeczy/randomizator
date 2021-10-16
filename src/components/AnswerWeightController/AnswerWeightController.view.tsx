import TextInput from 'components/form/components/textInput';
import useAnswerController from 'hooks/useAnswerController';
import { IAnswer } from 'hooks/types';

import useStyle from './AnswerWeightController.styles';

/** Component display conditionally number input or standalone form value from associated input. */
export const AnswerWeightController = ({ answerIndex }: IAnswer ): JSX.Element => {
  const styles = useStyle();
  const {
    register,
    weight,
    edit,
  } = useAnswerController( answerIndex );

  return edit
    ? (
      <TextInput
        fullWidth
        type="number"
        { ...register( `answers.${ answerIndex }.weight` as const ) }
      />
    )
    : <p className={ styles.weight }>{ weight }</p>;
};

export default AnswerWeightController;
