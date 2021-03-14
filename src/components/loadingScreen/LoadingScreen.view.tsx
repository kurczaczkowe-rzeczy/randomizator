import Loading from 'components/loading';

import classes from './loadingScreen.module.scss';

/**
 * Displays a large loader across the screen
 */
const LoadingScreen = (): JSX.Element => (
  <div className={ classes.screen }>
    <Loading classes={{ root: classes.loadingScreen }} />
  </div>
);

export default LoadingScreen;
