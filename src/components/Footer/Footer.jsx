import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import css from './Footer.module.css';
import Icon from '../Icon/Icon.jsx';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Logo isStaticWhite={true}/>
        <div className={css.infoWrapper}>
          <p className={css.paragraph}>
            Get the medicine to help you feel better, get back to your active life, and enjoy every moment.
          </p>
          <div className={css.socialWrapper}>
            <Link to="https://www.facebook.com/goITclub/" target="_blank" rel="noopener noreferrer" className={css.linkSocial}>
              <Icon iconId="icon-facebook" className={css.iconSocial} />
            </Link>
            <Link to="https://www.instagram.com/goitclub/" target="_blank" rel="noopener noreferrer" className={css.linkSocial}>
              <Icon iconId="icon-instagram" className={css.iconSocial} />
            </Link>
            <Link to="https://www.youtube.com/c/GoIT" target="_blank" rel="noopener noreferrer" className={css.linkSocial}>
              <Icon iconId="icon-youtube" className={css.iconSocial} />
            </Link>            
          </div>
        </div>
        <div className={css.linksWrapper}>
          <NavLink to="/home" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/medicine-store" className={css.link}>
            Medicine store
          </NavLink>
          <NavLink to="/medicine" className={css.link}>
            Medicine
          </NavLink>
        </div>

        <span className={css.divider} />
          <ul className={css.footerBottomList}>
            <li className={css.listItem}>
              <p className={css.copyrightText}>
                © E-Pharmacy 2024. All Rights Reserved
              </p>
            </li>
            <li className={css.listItem}>
              <Link to="" target="_blank" rel="noopener noreferrer" className={css.linkExternal}>
                 Privacy Policy
              </Link>
            </li>
            <li className={css.listItem}>
              <Link to="" target="_blank" rel="noopener noreferrer" className={css.linkExternal}>
                Terms & Conditions
              </Link>
            </li>
          </ul>        
      </div>
    </footer>
  );
}

export default Footer;