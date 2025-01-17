import { useModal } from '../../context/modal.js';
import Icon from '../../components/Icon/Icon.jsx';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const { closeModal } = useModal();

  const handleCloseModal = e => {
    closeModal(e);
  };

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalContainer}>
        <button
          className={css.modalButtonClose}
          aria-label="close-modal-window-button"
          onClick={handleCloseModal}>
          <Icon iconId="icon-x" className={css.iconClose} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
