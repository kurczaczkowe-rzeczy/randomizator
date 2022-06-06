import classNames from 'classnames';
import _isEqual from 'lodash/isEqual';

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import useTypedSelector from 'hooks/useTypedSelector';

import useStyle from './AnswerListener.styles';
import { IAnswerListener } from './AnswerListener.types';

/** Component listen answers weight change and if changed allow user to send changed answers. */
export const AnswerListener = ({ onWeightUpdate }: IAnswerListener ): JSX.Element => {
  const styles = useStyle();
  const areDirtyAnswers = useTypedSelector(({ answersManager: { areDirtyAnswers }}) => areDirtyAnswers );
  const dirtyAnswer = useTypedSelector(({ answersManager: { dirtyAnswer }}) => dirtyAnswer, _isEqual );

  return (
    <PlaylistAddCheckIcon
      className={ classNames( styles.root, { [ styles.dirty ]: areDirtyAnswers }) }
      onClick={ () => { onWeightUpdate( dirtyAnswer ); } }
    />
  );
};

export default AnswerListener;
