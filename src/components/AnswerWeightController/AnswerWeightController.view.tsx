import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import _includes from 'lodash/includes';

import TextInput from 'components/form/components/textInput';
import { RootState } from 'store/reducers/rootReducer';

import useStyle from './AnswerWeightController.styles';
import { IAnswerWeightController } from './AnswerWeightController.types';

/** Component display conditionally number input or standalone form value from associated input. */
export const AnswerWeightController = ({ answersIndex }: IAnswerWeightController ): JSX.Element => {
  const styles = useStyle();
  const { register, getValues } = useFormContext();
  const answerName = `answers.${ answersIndex }`;

  const { answerID, weight } = getValues().answers[ answersIndex ] || {};
  const edit = useSelector(( state: RootState ) => _includes( state.answersManager.editedAnswers, answerID ));

  return edit
    ? (
      <TextInput
        fullWidth
        type="number"
        { ...register( `${ answerName }.weight` as const ) }
      />
    )
    : <p className={ styles.weight }>{ weight }</p>;
};

export default AnswerWeightController;
