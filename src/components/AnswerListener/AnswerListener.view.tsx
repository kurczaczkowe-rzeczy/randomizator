import { useSelector } from 'react-redux';
import classNames from 'classnames';

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import { RootState } from 'store/reducers/rootReducer';

import useStyle from './AnswerListener.styles';
import { IAnswerListener } from './AnswerListener.types';

/** Component listen answers weight change and if changed allow user to send changed answers. */
export const AnswerListener = ({ onWeightUpdate }: IAnswerListener ): JSX.Element => {
  const styles = useStyle();
  const areDirtyAnswers = useSelector(( state: RootState ) => state.answersManager.areDirtyAnswers );
  const dirtyAnswer = useSelector(( state: RootState ) => state.answersManager.dirtyAnswer );

  return (
    <PlaylistAddCheckIcon
      className={ classNames( styles.root, { [ styles.dirty ]: areDirtyAnswers }) }
      onClick={ () => { onWeightUpdate( dirtyAnswer ); } }
    />
  );
};

export default AnswerListener;
