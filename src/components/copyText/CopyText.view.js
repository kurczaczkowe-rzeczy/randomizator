import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import classes from 'components/copyText/copyText.module.scss';

const CopyText = ({
  copied,
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
    <div className={ classNames( classes.copied, { [ classes.show ]: copied }) }>Skopiowano</div>
  </div>
);

CopyText.propTypes = {
  content: PropTypes.element.isRequired,
  copied: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

CopyText.defaultProps = {
  copied: false,
  text: '',
  onClick: () => {},
};

export default CopyText;
