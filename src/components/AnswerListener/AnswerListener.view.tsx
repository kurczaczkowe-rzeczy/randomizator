import classNames from 'classnames';
import _isEqual from 'lodash/isEqual';

import Button from 'components/Button';
import useLocaleString from 'hooks/useLocaleString';
import useTypedSelector from 'hooks/useTypedSelector';

import useStyle from './AnswerListener.styles';
import { IAnswerListener } from './AnswerListener.types';

/** Component listen answers weight change and if changed allow user to send changed answers. */
export const AnswerListener = ({ onWeightUpdate }: IAnswerListener ): JSX.Element => {
  const styles = useStyle();
  const areDirtyAnswers = useTypedSelector(({ answersManager: { areDirtyAnswers }}) => areDirtyAnswers );
  const dirtyAnswer = useTypedSelector(({ answersManager: { dirtyAnswer }}) => dirtyAnswer, _isEqual );
  const getString = useLocaleString();

  return (
    <div className={ styles.root }>
      <Button
        className={ classNames( styles.save, { [ styles.dirty ]: areDirtyAnswers }) }
        onClick={ ( e ) => {
          e.preventDefault();
          onWeightUpdate( dirtyAnswer );
        } }
        type="submit"
        label={ getString( 'confirmation' ) }
      />
    </div>
  );
};

export default AnswerListener;
