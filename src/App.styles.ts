import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ spacing, fonts }) => ({
  modalParagraph: {
    fontSize: fonts.size.base,
    margin: spacing(
      1, 0, 0.5,
    ),
  },
}));
