import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import EditIcon from '@material-ui/icons/Edit';

import { setEditedAnswer, unsetEditedAnswer } from 'store/actions/answersManagerActions';
import useAnswerController from 'hooks/useAnswerController';
import { IAnswerRowController } from 'hooks/types';

import useStyle from './AnswerEditController.styles';

/** Component control edit state on associated answer. */
export const AnswerEditController = ({ answerIndex }: IAnswerRowController ): JSX.Element => {
  const styles = useStyle();
  const { id, edit } = useAnswerController( answerIndex );
  const dispatch = useDispatch();

  const toggleEdit = useCallback(() => {
    const action = edit ? unsetEditedAnswer : setEditedAnswer;

    dispatch( action( id ));
  }, [
    dispatch,
    edit,
    id,
  ]);

  return (
    <EditIcon
      onClick={ toggleEdit }
      classes={{ root: classNames( styles.root, { [ styles.edit ]: edit }) }}
    />
  );
};

export default AnswerEditController;
