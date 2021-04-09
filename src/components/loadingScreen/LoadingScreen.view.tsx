import Loading from 'components/loading';

import useStyles from './LoadingScreen.styles';

/**
 * Displays a large loader over the whole page.
 */
export const LoadingScreen = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={ classes.screen }>
      <Loading classes={{ root: classes.loadingScreen }} />
    </div>
  );
};

export default LoadingScreen;
