import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import Logo from '../../Logo/Logo.jsx';
import NavigationMenu from '../../NavigationMenu/NavigationMenu.jsx';
import AuthMenu from '../../AuthMenu/AuthMenu.jsx';
import MobileMenu from '../../MobileMenu/MobileMenu.jsx';
import { useScrollContext } from '../../../context/ScrollContext.jsx';
import css from './NavigationBar.module.css';

const NavigationBar = () => {
  const location = useLocation();
  const { headerRef } = useScrollContext();

  const isHomePage = location.pathname === '/home';
  const isAuthorizationPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <header
      ref={headerRef}
      className={clsx(css.header, { [css.greenBackground]: isHomePage })}>
      <div className={css.wrapper}>
        <Logo />
        {!isAuthorizationPage && (
          <>
            <NavigationMenu />
            <AuthMenu />
          </>
        )}
      </div>
      <MobileMenu />
    </header>
  );
};

export default NavigationBar;
