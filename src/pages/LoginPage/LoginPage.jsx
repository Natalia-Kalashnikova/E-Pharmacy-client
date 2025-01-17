import RegistrationFormTitle from '../../components/Auth/RegistrationFormTitle/RegistrationFormTitle.jsx';
import LoginForm from '../../components/Auth/LoginForm/LoginForm.jsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <RegistrationFormTitle />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
