import CartForm from '../CartForm/CartForm.jsx';
import css from './PlaceOrder.module.css';

const PlaceOrder = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Cart</h3>
      <CartForm />
    </div>
  );
};

export default PlaceOrder;
