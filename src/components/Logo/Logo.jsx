import { NavLink, useLocation } from "react-router-dom";
import Icon from '../Icon/Icon.jsx';
import css from './Logo.module.css';
import { clsx } from "clsx";


const Logo = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    return (
        <NavLink to="/home" className={css.wrapper}>
            <Icon iconId={isHomePage ? 'icon-logo-white' : 'icon-logo'} className={css.iconLogo} />
            <p className={clsx(css.logoText, { [css.logoTextBlack]: !isHomePage })}>
                E-Pharmacy
            </p>
        </NavLink>
    );
}

export default Logo;