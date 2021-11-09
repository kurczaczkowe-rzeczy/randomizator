import useLocaleString from 'hooks/useLocaleString';
import _isString from 'lodash/isString';
import _isEmpty from 'lodash/isEmpty';

import useStyle from './AnswerContentController.styles';
import { IAnswerContentController } from './AnswerContentController.types';

/**
 * Component controls answer content cell. If answer is empty return specific
 * message for this case.
 */
export const AnswerContentController = ({ answer }: IAnswerContentController ): JSX.Element => {
  const styles = useStyle();
  const getString = useLocaleString();
  const emptyMessage = `(${ getString( 'emptyContentCell' ) })`;

  return _isString( answer ) && _isEmpty( answer )
    ? <span className={ styles.root }>{ emptyMessage }</span>
    : answer as JSX.Element;
};

export default AnswerContentController;
