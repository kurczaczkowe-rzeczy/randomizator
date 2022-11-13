import Typography from '@material-ui/core/Typography';
import { ReactComponent as Unicorn } from 'assets/unicorn.svg';

import useLocalize from 'hooks/useLocalize';
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
  const localize = useLocalize();

  return (
    <Modal
      classes={{ title: styles.modalTitle }}
      body={ (
        <div>
          <Typography classes={{ root: styles.modalParagraph }}>
            { localize( 'modalChangeUrlFirst' ) }
          </Typography>
          <Typography classes={{ root: styles.modalParagraph }}>
            { `${ localize( 'modalChangeUrlSecond' ) } ` }
            <Link href={ PROD_ADDRESS } label={ PROD_HOST_NAME } />
            { localize( 'modalChangeUrlThird' )}
          </Typography>
          <Typography classes={{ root: styles.modalParagraph }}>
            { localize( 'modalChangeUrlFourth' )}
          </Typography>
        </div>
      ) }
      title={ localize( 'modalChangeUrlTitle' ) }
      icon={ <Unicorn /> }
    />
  );
};

export default ProdReleaseModal;
export { ProdReleaseModal };
