import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import classes from 'components/copyText/copyText.module.scss';

const CopyText = ({
  isCopied,
  text,
  content,
  onClick,
}) => (
  <div className={ classes.text }>
    <CopyToClipboard
      text={ text }
      onCopy={ onClick }
    >
      <FileCopyIcon />
    </CopyToClipboard>
    { content }
    <div className={ classNames( classes.copied, { [ classes.show ]: isCopied }) }>Skopiowano</div>
  </div>
);

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isCopied: PropTypes.bool,
  onClick: PropTypes.func,
};

CopyText.defaultProps = {
  isCopied: false,
  onClick: () => {},
};

export default CopyText;
