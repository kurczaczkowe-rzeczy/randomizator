import styles from './loading.module.scss';

export interface ILoading{
  classes?: { root: string };
}

const LoadingView = ({ classes = { root: '' }}: ILoading ): JSX.Element => (
  <svg
    className={ classes.root }
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
  >
    <defs>
      <linearGradient
        id="linear-loading-gradient"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop offset="0%" stopColor="#765076" />
        <stop offset="65%" stopColor="#771e76" />
      </linearGradient>
    </defs>

    <circle
      cx="50"
      cy="50"
      r="45"
      className={ styles.circle }
    />
  </svg>
);

export default LoadingView;
