import PlaceOrder from '../../components/PlaceOrder/PlaceOrder.jsx';
import CartOverview from '../../components/CartOverview/CartOverview.jsx';
import css from './CartPage.module.css';
import { selectIsLoading } from '../../redux/cart/selectors';
import Loader from '../../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <PlaceOrder />
          <CartOverview />
        </>
      )}
    </div>
  )
};

export default CartPage;