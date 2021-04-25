import PropTypes from 'prop-types';

import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';

import useLocaleString from 'hooks/useLocaleString';

import IconButton from 'components/iconButton/IconButton.view';
import DrawResult from 'components/drawResult/DrawResult.view';
import SelectFilter from 'components/selectFilter';

// ToDo: issue #155
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
      { loadedData && (
        <IconButton
          value={ getString( 'drawAnswers' ) }
          icon={ <ScatterPlotIcon /> }
          onClick={ onRandomClick }
        />
      )}
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
