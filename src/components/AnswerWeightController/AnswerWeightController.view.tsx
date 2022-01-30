import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import useAnswerController from 'hooks/useAnswerController';
import { IAnswerRowController } from 'hooks/types';
import { setDirtyAnswer } from 'store/actions/answersManagerActions';
import TextInput from 'components/form/components/textInput';

import useStyle from './AnswerWeightController.styles';

/** Component display conditionally number input or standalone form value from associated input. */
export const AnswerWeightController = ({ answerIndex }: IAnswerRowController ): JSX.Element => {
  const styles = useStyle();
  const {
    register,
    weight,
    edit,
    answerID,
  } = useAnswerController( answerIndex );
  const dispatch = useDispatch();

  const registerProps = register( `answers.${ answerIndex }.weight` as const );

  return edit
    ? (
      <TextInput
        fullWidth
        type="number"
        { ...registerProps }
        onChange={ ( event: ChangeEvent<HTMLInputElement> ) => {
          registerProps.onChange( event );
          dispatch( setDirtyAnswer( answerIndex, { answerID, weight: Number( event.target.value ) }));
        } }
      />
    )
    : <p className={ styles.weight }>{ weight }</p>;
};

export default AnswerWeightController;
