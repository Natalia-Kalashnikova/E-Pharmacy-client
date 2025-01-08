import { NavLink, useLocation } from "react-router-dom";
import css from './Logo.module.css';
import clsx from "clsx";
import whiteLogo from '../../images/logo@2x-white.png';
import greenLogo from '../../images/logo@2x-green.png';


const Logo = ({ isStaticWhite = false }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/home';

    return (
        <NavLink to="/home" className={css.wrapper}>
            {isStaticWhite || isHomePage ? (
                <img className={css.iconLogo} src={whiteLogo} alt="logo" />
            ) : (
                <img className={css.iconLogo} src={greenLogo} alt="logo" />                    
            )}
            <p className={clsx(css.logoText, { [css.logoTextBlack]: !isStaticWhite && !isHomePage })}>
                E-Pharmacy
            </p>
        </NavLink>
    );
}

export default Logo;