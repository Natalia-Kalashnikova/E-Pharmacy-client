import css from './MainBanner.module.css';

const MainBanner = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textWrapper}>
        <h1 className={css.title}>Your medication delivered</h1>
        <div className={css.paragraphWrapper}>
          <p className={css.paragraph}>
            Say goodbye to all your healthcare worries with us
          </p>
        </div>
        <div className={css.background} />
      </div>
    </div>
  );
};

export default MainBanner;
