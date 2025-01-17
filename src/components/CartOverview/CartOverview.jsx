import { useDispatch } from 'react-redux';
import { fetchCart, updateCart } from '../../redux/cart/operations';
import Icon from '../Icon/Icon.jsx';
import css from './CartOverview.module.css';

const CartOverview = ({ cart }) => {
  const dispatch = useDispatch();

  const handleAdd = (productId, currentQuantity) => {
    fetchData(productId, currentQuantity + 1);
  };

  const handleRemove = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      fetchData(productId, currentQuantity - 1);
    }
  };

  const fetchData = async (productId, quantity) => {
    await dispatch(updateCart({ productId, quantity })).unwrap();
    await dispatch(fetchCart()).unwrap();
  };

  const handleDeleteProduct = productId => {
    fetchData(productId, 0);
  };

  return (
    <ul className={css.cartList}>
      {cart.map(product => (
        <li key={product._id} className={css.cartItem}>
          <img
            src={product.product.photo}
            alt={product.product.name}
            className={css.productImage}
          />
          <div className={css.productDetails}>
            <div className={css.productInfo}>
              <div className={css.productNameWrapper}>
                <h3 className={css.productName}>{product.product.name}</h3>
                <p className={css.productSupplier}>
                  {product.product.suppliers}
                </p>
              </div>
              <p className={css.productPrice}>₴{product.product.price}</p>
            </div>
            <div className={css.btnWrapper}>
              <div className={css.buttonAddRemoveWrapper}>
                <button
                  aria-label="Remove"
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() =>
                    handleAdd(product.product._id, product.quantity)
                  }>
                  <Icon iconId="icon-plus" className={css.icon} />
                </button>
                <p className={css.quantity}>{product.quantity}</p>
                <button
                  aria-label="Remove"
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() =>
                    handleRemove(product.product._id, product.quantity)
                  }>
                  <Icon iconId="icon-minus" className={css.icon} />
                </button>
              </div>
              <button
                aria-label="Delete"
                type="button"
                className={css.btnRemove}
                onClick={() => handleDeleteProduct(product.product._id)}>
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartOverview;
