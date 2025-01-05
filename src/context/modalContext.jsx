import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
import Modal from '../../src/components/Modal/Modal.jsx';

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
    const backdropRef = useRef(null);
    
  const closeModal = useCallback(e => {
    if (
      (e && e.target === e.currentTarget) ||
      (e && e.code === 'Escape') ||
      (e && e.type === 'submit')
    ) {
      document.body.style.overflow = 'visible';
      if (backdropRef.current !== null) {
        backdropRef.current.style.opacity = 0;
        backdropRef.current.style.visibility = 'hidden';
      }
      setTimeout(() => {
        setModalContent(null);
      }, 700);
    }
  }, []);
    
  const openModal = content => {
    document.body.style.overflow = 'hidden';
    setModalContent(content);
    setTimeout(() => {
      if (backdropRef.current) {
        backdropRef.current.style.opacity = 1;
        backdropRef.current.style.visibility = 'visible';
      }
    }, 0);
    };
    
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    const timer = setTimeout(() => {
      if (backdropRef.current !== null) {
        backdropRef.current.style.opacity = 1;
        backdropRef.current.style.visibility = 'visible';
      }
    }, 0);
      
    return () => {
      window.removeEventListener('keydown', closeModal);
      clearTimeout(timer);
    };
  }, [closeModal]);
    
  return (
    <modalContext.Provider value={{ modalContent, openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className={css.modalBackdrop} ref={backdropRef}>
            <Modal>{modalContent}</Modal>
          </div>,
          document.querySelector('#modal-root')
        )}
    </modalContext.Provider>
  );
};