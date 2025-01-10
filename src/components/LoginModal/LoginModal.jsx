import LoginForm from '../Auth/LoginForm/LoginForm.jsx';
import css from './LoginModal.module.css';

const LoginModal = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textWrapper}>
        <h3 className={css.title}>Log in to your account</h3>
        <p className={css.paragraph}>
          Please login to your account before continuing.
        </p>
      </div>
      <LoginForm isModal={true} />
    </div>
  );
};

export default LoginModal;