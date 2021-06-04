import MuiModal from '@material-ui/core/Modal';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import { BACKDROP_TIMEOUT } from 'constans';
import getClassOverrides from 'utils/getClassOverrides';

import useStyles from './Modal.styles';
import {
  IModalWithControls,
  LocalStylesMap,
} from './Modal.types';

/**
 * UI element that display over entire page.
 */
export const Modal = ({
  body,
  classes = undefined,
  icon = null,
  isModalOpen,
  title,
  onClose,
}: IModalWithControls ): JSX.Element => {
  const localStyles = useStyles();
  const styles = getClassOverrides<LocalStylesMap>( localStyles,
    {
      iconWrapper: classes?.icon,
      titleWrapper: classes?.title,
      bodyWrapper: classes?.body,
      contentWrapper: [{ [ localStyles.withIcon ]: !!icon }, classes?.content ],
    });

  return (
    <MuiModal
      closeAfterTransition
      BackdropProps={{ timeout: BACKDROP_TIMEOUT }}
      className={ styles.modal }
      open={ isModalOpen }
      onClose={ onClose }
    >
      <Grow in={ isModalOpen }>
        <div className={ styles.contentWrapper }>
          <div className={ styles.iconWrapper }>{ icon }</div>
          <div className={ styles.titleWrapper }>
            <Typography variant="h4" classes={{ root: styles.title }}>
              { title }
            </Typography>
            <hr className={ styles.separator } />
          </div>
          <div className={ styles.bodyWrapper }>{ body }</div>
        </div>
      </Grow>
    </MuiModal>
  );
};

export default Modal;
