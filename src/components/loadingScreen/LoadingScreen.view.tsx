import Loading from 'components/loading';

import classes from './loadingScreen.module.scss';

const LoadingScreen = (): JSX.Element => (
  <div className={ classes.screen }>
    <Loading classes={{ root: classes.loadingScreen }} />
  </div>
);

export default LoadingScreen;
