import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/iconButton/IconButton.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import SelectFilter from 'components/selectFilter';
import useLocaleString from '../../hooks/useLocaleString';

// ToDo make this component more global
const Draw = ({
  loadedData,
  result,
  errors,
  onRandomClick,
}) => {
  const getString = useLocaleString();

  return (
    <>
      <SelectFilter />
      { loadedData && <IconButton value={ getString( 'drawAnswers' ) } onClick={ onRandomClick } /> }
      <DrawResult
        maleName={ result.nameMale }
        femaleName={ result.nameFemale }
        errors={ errors }
      />
    </>
  );
};

Draw.propTypes = {
  loadedData: PropTypes.bool.isRequired,
  onRandomClick: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf( PropTypes.string ),
  result: PropTypes.objectOf( PropTypes.any ),
};

Draw.defaultProps = {
  result: {},
  errors: [],
};

export default Draw;
