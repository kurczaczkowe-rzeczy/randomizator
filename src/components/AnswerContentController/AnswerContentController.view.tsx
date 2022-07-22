import classNames from 'classnames';
import _isString from 'lodash/isString';
import _isEmpty from 'lodash/isEmpty';

import useAnswerController from 'hooks/useAnswerController';
import useLocaleString from 'hooks/useLocaleString';

import useStyle from './AnswerContentController.styles';
import { IAnswerContentController } from './AnswerContentController.types';

/**
 * Component controls answer content cell. If answer is empty return specific
 * message for this case.
 */
export const AnswerContentController = ({ answer, answerIndex }: IAnswerContentController ): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();
  const { weight } = useAnswerController( answerIndex );
  const emptyMessage = `(${ getString( 'emptyContentCell' ) })`;

  const isEmptyAnswer = _isString( answer ) && _isEmpty( answer );
  const isCrossedOut = !Number( weight );

  const Element = isCrossedOut ? 'del' : 'span';

  return (
    <Element className={ classNames( styles.root, { [ styles.emptyAnswer ]: isEmptyAnswer }) }>
      { isEmptyAnswer ? emptyMessage : answer }
    </Element>
  );
};

export default AnswerContentController;
