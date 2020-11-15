import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import classNames from 'classnames';

import classes from './copyLink.module.scss';

const CopyLink = ({
  copied, link, onClick,
}) => (
  <div className={ classes.link }>
    <CopyToClipboard
      text={ link }
      onCopy={ onClick }
    >
      <FileCopyIcon />
    </CopyToClipboard>
    <p>{ link }</p>
    <div className={ classNames( classes.copied, { [ classes.show ]: copied }) }>Skopiowano</div>
  </div>
);

CopyLink.propTypes = {
  copied: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

CopyLink.defaultProps = {
  copied: false,
  link: '',
  onClick: () => {},
};

export default CopyLink;
