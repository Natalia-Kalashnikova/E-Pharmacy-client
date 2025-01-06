// import { NavLink, useLocation } from "react-router-dom";
// import Icon from '../Icon/Icon.jsx';
// import css from './Logo.module.css';
// import { clsx } from "clsx";


// const Logo = ({ isStaticWhite = false }) => {
//     const location = useLocation();
//     const isHomePage = location.pathname === '/home';

//     return (
//         <NavLink to="/home" className={css.wrapper}>
//             <Icon iconId={isStaticWhite || isHomePage ? 'icon-logo-white' : 'icon-logo'} className={css.iconLogo} />
//             <p className={clsx(css.logoText, { [css.logoTextBlack]: !isStaticWhite && !isHomePage })}>
//                 E-Pharmacy
//             </p>
//         </NavLink>
//     );
// }

// export default Logo;

import { NavLink, useLocation } from "react-router-dom";
import css from './Logo.module.css';
import { clsx } from "clsx";
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