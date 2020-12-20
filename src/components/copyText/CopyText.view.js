import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import classes from 'components/copyText/copyText.module.scss';

const CopyText = ({
  copied,
  link,
  component,
  onClick,
}) => (
  <div className={ classes.link }>
    <CopyToClipboard
      text={ link }
      onCopy={ onClick }
    >
      <FileCopyIcon />
    </CopyToClipboard>
    { component }
    <div className={ classNames( classes.copied, { [ classes.show ]: copied }) }>Skopiowano</div>
  </div>
);

CopyText.propTypes = {
  component: PropTypes.element.isRequired,
  copied: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

CopyText.defaultProps = {
  copied: false,
  link: '',
  onClick: () => {},
};

export default CopyText;
