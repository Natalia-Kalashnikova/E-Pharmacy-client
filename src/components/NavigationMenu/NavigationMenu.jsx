import { NavLink } from 'react-router-dom';
import css from './NavigationMenu.module.css';
import clsx from 'clsx';

const NavigationMenu = ({ toggleMenu = false }) => {
  const handleActiveLink = ({ isActive, customClass }) => {
    return clsx(css.link, customClass, { [css.active]: isActive });
  };
  
  return (
    <nav className={css.wrapper}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          handleActiveLink({ isActive, customClass: css.linkHome })
        }
        onClick={toggleMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/medicine-store"
        className={({ isActive }) =>
          handleActiveLink({ isActive, customClass: css.linkMedicineStore })
        }
        onClick={toggleMenu}
      >
        Medicine store
      </NavLink>
      <NavLink
        to="/medicine"
        className={({ isActive }) =>
          handleActiveLink({ isActive, customClass: css.linkMedicine })
        }
        onClick={toggleMenu}
      >
        Medicine
      </NavLink>
    </nav>
  );
};

export default NavigationMenu;