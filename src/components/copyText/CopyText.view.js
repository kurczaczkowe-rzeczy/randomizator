import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import useLocalize from 'hooks/useLocalize';

import classes from 'components/copyText/copyText.module.scss';

const CopyText = ({
  isCopied,
  text,
  content,
  withFlexStart,
  onClick,
}) => {
  const localize = useLocalize();

  return (
    <div className={ classNames( classes.text, { [ classes.withFlexStart ]: withFlexStart }) }>
      <CopyToClipboard
        text={ text }
        onCopy={ onClick }
      >
        <span title={ localize( 'copyIcon' ) }><FileCopyIcon /></span>
      </CopyToClipboard>
      { content }
      <div className={ classNames( classes.copied, { [ classes.show ]: isCopied }) }>{ localize( 'copied' ) }</div>
    </div>
  );
};

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isCopied: PropTypes.bool,
  withFlexStart: PropTypes.bool,
  onClick: PropTypes.func,
};

CopyText.defaultProps = {
  isCopied: false,
  withFlexStart: false,
  onClick: () => {},
};

export default CopyText;
