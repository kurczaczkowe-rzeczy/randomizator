import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing, palette }) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '30% 60%',
    columnGap: '10%',
  },
  descriptor: { '& > *:not(:last-child)': { marginBottom: spacing( 4.25 ) }},
  backIcon: { transform: 'rotateY(180deg)' },
  baseLine: { alignItems: 'baseline' },
  highlightCard: {
    animationName: '$highLight',
    animationDuration: '2.5s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  textBox: { marginTop: 0 },
  highlightText: {
    '&::before': {
      animationName: '$highLightBefore, $rotate',
      animationTimingFunction: 'ease-in-out, linear',
      animationIterationCount: 'infinite',
      animationDuration: '2.5s, 4s',
    },

    '&::after': {
      animationName: '$highLightAfter',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDuration: '2.5s',
    },
  },
  '@keyframes highLightAfter': { '50%': { backgroundColor: palette.backgroundHighlighted }},
  '@keyframes highLightBefore': {
    '50%': {
      backgroundColor: palette.backgroundHighlighted,
      backgroundImage: `linear-gradient(${ palette.backgroundHighlighted }, ${ palette.backgroundHighlighted }),
       linear-gradient(${ palette.primary.main }, ${ palette.primary.main })`,
    },
  },
  '@keyframes rotate': { '100%': { transform: 'rotate(1turn)' }},
  '@keyframes highLight': {
    '50%': {
      backgroundColor: palette.backgroundHighlighted,
      boxShadow: `${ palette.primary.main } 0 0 30px`,
    },
  },
}));
