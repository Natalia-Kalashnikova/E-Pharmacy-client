import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '../../Icon/Icon.jsx';
import css from './LogInMenu.module.css';
import { logoutAPI } from '../../../redux/auth/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUserInfo } from '../../../redux/auth/selectors';
import { useEffect, useState } from 'react';
import { getUserInfoAPI } from '../../../redux/auth/operations';
import { selectCart } from '../../../redux/cart/selectors';
import { fetchCart } from '../../../redux/cart/operations';

const LogInMenu = () => {
  const [isCartFetched, setCartFetched] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const userInfo = useSelector(selectUserInfo);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!token || isCartFetched) return;
      if (!userInfo) {
        await dispatch(getUserInfoAPI()).unwrap();
      }
      dispatch(fetchCart());
      setCartFetched(true);
    };
    fetchData();
  }, [dispatch, token, userInfo, isCartFetched]);

  const handleCartClick = () => {
    navigate('/cart');
  };
  
  const handleLogout = () => {
    dispatch(logoutAPI());
  };
    
    return (
    <div className={css.mainWrapper}>
      <div className={css.wrapper}>
        <div className={css.userCart} onClick={handleCartClick}>
          <Icon iconId="icon-shopping-cart" className={css.iconCart} />
          <span className={css.cartCount}>{cart ? cart.length : 0}</span>
        </div>
        <div
          className={clsx(css.userAvatar, {
            [css.avatarWhiteColor]: isHomePage,
          })}
        >
          {(userInfo && userInfo.name && userInfo.name[0]) || 'U'}
        </div>
      </div>
      <button
        type="button"
        className={clsx(css.button, { [css.buttonWhiteColor]: isHomePage })}
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
        
}

export default LogInMenu;