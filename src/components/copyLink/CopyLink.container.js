import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStateWithCallback from 'use-state-with-callback';

import CopyLinkView from 'components/copyLink/CopyLink.view';
import { DELAY_DISAPPEARING, HOME_PAGE } from 'constans';

const CopyLink = ({ formID, userID }) => {
  const [ link, setLink ] = useState( '' );
  const [ copied, setCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  useEffect(() => {
    if ( formID ) {
      setLink( `${ HOME_PAGE }/${ userID }/${ formID }` );
    }
  }, [ formID ]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CopyLinkView
      copied={ copied }
      link={ link }
      onClick={ () => setCopied( true ) }
    />
  );
};

CopyLink.propTypes = {
  formID: PropTypes.string,
  userID: PropTypes.string,
};

CopyLink.defaultProps = {
  formID: '',
  userID: '',
};

const mapStateToProps = ( state ) => ({ formID: state.form.docID });

export default connect( mapStateToProps )( CopyLink );
