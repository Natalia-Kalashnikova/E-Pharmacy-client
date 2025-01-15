import PlaceOrder from '../../components/PlaceOrder/PlaceOrder.jsx';
import CartOverview from '../../components/CartOverview/CartOverview.jsx';
import css from './CartPage.module.css';
import { selectCart, selectIsLoading } from '../../redux/cart/selectors';
import Loader from '../../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const cart = useSelector(selectCart) || [];
  const navigate = useNavigate();
  
  const handleStoreClick = () => {
    navigate('/medicine');
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && cart.length === 0 && (
        <div className={css.emptyCart}>
          <p className={css.emptyCartText}>Your cart is empty</p>
          <button
            type="button"
            className={css.btnEmptyCart}
            onClick={handleStoreClick}
          >
            To store
          </button>
        </div>
      )}
      {!isLoading && cart.length > 0 && (
        <>
          <PlaceOrder />
          <CartOverview cart={cart} />
        </>
      )}
    </div>
  )
};

export default CartPage;