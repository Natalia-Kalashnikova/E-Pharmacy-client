import css from './RegistrationFormTitle.module.css';

const RegistrationFormTitle = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.paragraph}>
        Your medication, delivered Say goodbye to all{' '}
        <span className={css.span}>your healthcare</span> worries with us
      </p>
      <div className={css.backgroundWrapper} />
    </div>
  );
};

export default RegistrationFormTitle;
