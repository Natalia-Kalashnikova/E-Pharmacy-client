import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const [redirectTime, setRedirectTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, redirectTime * 1000);

    return () => clearTimeout(timer);
  }, [redirectTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirectTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.wrapperMain}>
      <div className={css.wrapper}>
        <h1 className={css.title}>404 - Page Not Found</h1>
        <p className={css.paragraph}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className={css.paragraph}>
          Please check the URL for any mistakes or return to the
        </p>
        <Link to="/" className={css.link}>
          Homepage
        </Link>
        <p className={css.paragraph}>
          Redirecting in {redirectTime} seconds...
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
