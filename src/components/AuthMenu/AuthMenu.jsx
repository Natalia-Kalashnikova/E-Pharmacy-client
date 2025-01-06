import { NavLink, useLocation } from 'react-router-dom';
import css from './AuthMenu.module.css';
import clsx from 'clsx';

const AuthMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  
  return (
    <div className={css.wrapper}>
      <div className={css.btnWrapper}>
        <NavLink
          to="/register"
          className={clsx(css.btnRegister, { [css.greenColor]: !isHomePage })}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={clsx(css.btnLogin, { [css.greenColor]: !isHomePage })}
        >
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default AuthMenu;