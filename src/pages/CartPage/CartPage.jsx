import PlaceOrder from '../../components/PlaceOrder/PlaceOrder.jsx';
import CartOverview from '../../components/CartOverview/CartOverview.jsx';
import css from './CartPage.module.css';

const CartPage = () => {
  return (
    <div className={css.wrapper}>
      <PlaceOrder />
      <CartOverview />
    </div>
  )
};

export default CartPage;