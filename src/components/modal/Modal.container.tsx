import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal } from 'store/actions/globalActions';
import { RootState } from 'store/reducers/rootReducer';

import { IModal } from './Modal.types';
import ModalView from './Modal.view';

const Modal = ( props: IModal ): JSX.Element => {
  const dispatch = useDispatch();
  let isModalOpen = useSelector(( state: RootState ) => state.global.isModalOpen );

  const handleClose = useCallback(() => dispatch( hideModal()), [ dispatch ]);

  isModalOpen = true;

  return (
    <ModalView
      isModalOpen={ isModalOpen }
      onClose={ handleClose }
      { ...props }
    />
  );
};

export default Modal;
