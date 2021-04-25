import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import classes from 'components/copyText/copyText.module.scss';
import useLocaleString from '../../hooks/useLocaleString';

const CopyText = ({
  isCopied,
  text,
  content,
  withFlexStart,
  onClick,
}) => {
  const getString = useLocaleString();

  return (
    <div className={ classNames( classes.text, { [ classes.withFlexStart ]: withFlexStart }) }>
      <CopyToClipboard
        text={ text }
        onCopy={ onClick }
      >
        <FileCopyIcon />
      </CopyToClipboard>
      { content }
      <div className={ classNames( classes.copied, { [ classes.show ]: isCopied }) }>{ getString( 'copied' ) }</div>
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
