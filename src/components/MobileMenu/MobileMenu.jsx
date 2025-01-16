import { useState } from "react";
import Logo from "../Logo/Logo.jsx";
import Icon from "../Icon/Icon.jsx";
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";
import css from './MobileMenu.module.css';
import { NavLink, useLocation } from "react-router-dom";
import LogInMenu from '../Header/LogInMenu/LogInMenu.jsx';
import clsx from "clsx";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logoutAPI } from '../../redux/auth/operations.js';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
      const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

    const isHomePage = location.pathname === '/home';
     const isAuthorizationPage = ['/login', '/register'].includes(
    location.pathname
  );

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    const handleLogout = () => {
        dispatch(logoutAPI());
        setIsOpen(false);
    };

    const renderAuthButtons = () => (
    <>
      <NavLink to="/register" className={css.btnRegister} onClick={toggleMenu}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.btnLogin} onClick={toggleMenu}>
        Log in
      </NavLink>
    </>
  );
  const renderLogoutButton = () => (
    <button aria-label="Logout" type="button" onClick={handleLogout} className={css.btnLogout}>
      Logout
    </button>
  );

    return (
        <>
            {isOpen && <div className={css.overlay} onClick={toggleMenu} />}
            <div className={css.wrapper}>
                <Logo />
                {!isAuthorizationPage && (
                <div className={css.userMenuWrapper}>
            {isLoggedIn && <LogInMenu />}
            <button aria-label="Open" type="button" className={css.button} onClick={toggleMenu}>
              <Icon
                iconId="icon-burger-menu"
                className={clsx(css.iconMenu, {
                  [css.iconMenuBlack]: !isHomePage,
                })}
              />
            </button>
          </div>
                )}

                {isOpen && (
                    <div className={css.mobileMenu}>
                        <button aria-label="Close" className={css.closeBtn} onClick={toggleMenu}>
                            <Icon iconId="icon-x" className={css.iconClose} />
                        </button>
                        <span />
                        <NavigationMenu toggleMenu={toggleMenu} />
                        <div className={css.btnWrapper}>
                            {isLoggedIn ? renderLogoutButton() : renderAuthButtons()}
                        </div>
                    </div>
                )}
            </div>
        </>
    );    
}

export default MobileMenu;