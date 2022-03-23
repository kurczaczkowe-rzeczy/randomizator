import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import TableCell from 'components/TableCell';
import { StringOrNumber } from 'types';

const useStyles = makeStyles< Theme, { flex: string }>({
  root: {
    flex: ({ flex }) => `0 1 ${ flex }`,
    alignSelf: 'center',

    '& > div': { width: ({ flex }) => flex },
  },
});

const Column = ({ flex, children }: { children: StringOrNumber; flex: string }): JSX.Element => {
  const styles = useStyles({ flex });

  return (
    <div className={ styles.root }>
      <TableCell component="div">{ children }</TableCell>
    </div>
  );
};

const mockData = {
  answerIndex: 0,
  columns: [
    <Column key="value" flex="100%">Imię męskie</Column>,
    <Column key="weight" flex="150px">5</Column>,
    <Column key="edit" flex="60px">edit</Column>,
  ],
  style: { display: 'flex' },
};

export default mockData;
