import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStateWithCallback from 'use-state-with-callback';
import { DELAY_DISAPPEARING, HOME_PAGE } from 'constans';

import CopyLinkView from 'components/copyLink/CopyLink.view';

const CopyLink = ({ formID, auth }) => {
  const [ link, setLink ] = useState( '' );
  const [ copied, setCopied ] = useStateWithCallback( false, ( copied ) => {
    if ( copied ) {
      setTimeout(() => { setCopied( false ); }, DELAY_DISAPPEARING );
    }
  });

  useEffect(() => {
    if ( formID ) {
      setLink( `${ HOME_PAGE }/${ auth.uid }/${ formID }` );
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
  auth: PropTypes.shape({ uid: PropTypes.string }),
  formID: PropTypes.string,
};

CopyLink.defaultProps = {
  auth: { uid: '' },
  formID: '',
};

const mapStateToProps = ( state ) => ({
  formID: state.form.docID,
  auth: state.firebase.auth,
});

export default connect( mapStateToProps )( CopyLink );
