import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import classNames from 'classnames';

import classes from './iconButton.module.scss';

interface IIconButton {
  icon?: string | null; // ToDo: icon should be React.ReactNode
  onClick: () => void;
  value: string;
}
// ToDo: to refactor
const IconButton = ({
  value,
  icon = null,
  onClick = (): void => {},
}: IIconButton ): JSX.Element => (
  <button
    type="button"
    className={ classes.button }
    onClick={ onClick }
  >
    { icon
      ? <ExitToAppIcon classes={{ root: classNames( classes.icon, classes.moreSpace ) }} />
      : <ScatterPlotIcon classes={{ root: classes.icon }} />}
    <span>{ value }</span>
  </button>
);

export default IconButton;
