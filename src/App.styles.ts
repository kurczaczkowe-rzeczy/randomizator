import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing, fonts }) => ({
  modalParagraph: {
    fontSize: fonts.size.base,
    letterSpacing: -0.8,
    margin: spacing(
      1, 0, 0.5,
    ),
  },
  modalTitle: { '& h4': { letterSpacing: 1 }},
}));
