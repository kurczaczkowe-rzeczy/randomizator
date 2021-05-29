import Typography from '@material-ui/core/Typography';

import useLocaleString from 'hooks/useLocaleString';
import { PROD_ADDRESS, PROD_HOST_NAME } from 'constans';

import Link from 'components/Link';
import Modal from 'components/Modal';

import useStyles from './ProdReleaseModal.styles';

/**
 * Modasl displaying information about prod version fo application. It only show on development app
 * hosted on https://kurczaczkowe-rzeczy.github.io/randomizator/.
 */
const ProdReleaseModal = (): JSX.Element => {
  const styles = useStyles();
  const getString = useLocaleString();

  return (
    <Modal
      classes={{ title: styles.modalTitle }}
      body={ (
        <div>
          <Typography classes={{ root: styles.modalParagraph }}>
            { getString( 'modalChangeUrlFirst' ) }
          </Typography>
          <Typography classes={{ root: styles.modalParagraph }}>
            { `${ getString( 'modalChangeUrlSecond' ) } ` }
            <Link href={ PROD_ADDRESS } label={ PROD_HOST_NAME } />
            { getString( 'modalChangeUrlThird' )}
          </Typography>
          <Typography classes={{ root: styles.modalParagraph }}>
            { getString( 'modalChangeUrlFourth' )}
          </Typography>
        </div>
      ) }
      title={ getString( 'modalChangeUrlTitle' ) }
    />
  );
};

export default ProdReleaseModal;
export { ProdReleaseModal };
