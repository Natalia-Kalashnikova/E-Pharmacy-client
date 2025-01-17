import RegistrationForm from '../Auth/RegistrationForm/RegistrationForm.jsx';
import css from './RegisterModal.module.css';

const RegisterModal = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textWrapper}>
        <h3 className={css.title}>Sign Up</h3>
        <p className={css.paragraph}>
          Before proceeding, please register on our site.
        </p>
      </div>
      <RegistrationForm isModal={true} />
    </div>
  );
};

export default RegisterModal;
