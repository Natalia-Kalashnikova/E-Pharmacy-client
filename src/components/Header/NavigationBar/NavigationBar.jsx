import { clsx } from "clsx";
import { useLocation } from "react-router-dom";
import Logo from '../../Logo/Logo.jsx';
import NavigationMenu from '../../NavigationMenu/NavigationMenu.jsx';
import AuthMenu from '../../AuthMenu/AuthMenu.jsx';
import MobileMenu from '../../MobileMenu/MobileMenu.jsx';
import css from './NavigationBar.module.css';


const NavigationBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    return (
        <header className={clsx(css.header, { [css.greenBackground]: isHomePage })}>
            <div className={css.wrapper}>
                <Logo />
                <NavigationMenu />
                <AuthMenu />
            </div>
            <MobileMenu />
        </header>
    );
}

export default NavigationBar;