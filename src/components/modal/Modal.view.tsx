import MuiModal from '@material-ui/core/Modal';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

import { BACKDROP_TIMEOUT } from 'constans';

import useStyle from './Modal.styles';
import { IModalWithControls } from './Modal.types';
import { getClassesWithOverrides } from './Modal.utils';

/**
 * UI element that display over entire page.
 */
const Modal = ({
  body,
  classes = undefined,
  icon = null,
  isModalOpen,
  title,
  onClose,
}: IModalWithControls ): JSX.Element => {
  const styles = getClassesWithOverrides({
    styles: useStyle(),
    overrides: classes,
    withIcon: !!icon,
  });

  return (
    <MuiModal
      closeAfterTransition
      aria-labelledby="modalTitle"
      BackdropProps={{ timeout: BACKDROP_TIMEOUT }}
      // eslint-disable-next-line react/forbid-component-props
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
export { Modal };
