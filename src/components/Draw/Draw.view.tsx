import { Fragment } from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import _map from 'lodash/map';
import _includes from 'lodash/includes';
import _isEmpty from 'lodash/isEmpty';

import useLocaleString from 'hooks/useLocaleString';
import TextNode from 'components/textNode';
import Button from 'components/Button';
import SelectFilter from 'components/selectFilter';

import useStyles from './Draw.styles';
import { IDraw } from './Draw.types';

// ToDo: issue #155
/** Component display fields with drawn answers and query field with button to draw. */
const Draw = ({
  fields,
  result,
  errors,
  onRandomClick,
}: IDraw ): JSX.Element => {
  const styles = useStyles();
  const getString = useLocaleString();

  return (
    <>
      <SelectFilter />
      { !_isEmpty( fields ) && (
        <Button
          value={ getString( 'drawAnswers' ) }
          icon={ <ScatterPlotIcon /> }
          onClick={ onRandomClick }
          variant="iconButton"
        />
      )}
      <div className={ styles.smallWidthInCenter }>
        { _map( fields, ({ name }) => (
          <Fragment key={ name }>
            <div className={ styles.alignCenterRight }>
              <TextNode
                required
                value={ name }
                classes={ styles.label }
              />
              <TextNode
                required
                value={ result[ name ] }
                classes={ styles.input }
                type="input-text"
              />
            </div>
            { _includes( errors, name ) && <p className={ styles.error }>{ getString( 'noValueToDraw' ) }</p> }
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Draw;
