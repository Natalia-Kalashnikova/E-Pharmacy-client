import RegistrationFormTitle from '../../components/Auth/RegistrationFormTitle/RegistrationFormTitle.jsx';
import RegistrationForm from '../../components/Auth/RegistrationForm/RegistrationForm.jsx';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.wrapper}>
      <RegistrationFormTitle />
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
