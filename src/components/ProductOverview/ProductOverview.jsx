import { useState } from "react";
import { useModal } from "../../context/modalContext.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import Icon from '../Icon/Icon.jsx';
import css from './ProductOverview.module.css';

const ProductOverview = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  const { openModal } = useModal();
  const loggedIn = false;
  
  const handleAddToCart = () => {
    if (!loggedIn) {      
      return openModal(<LoginModal />);
    }
    console.log(product);
  };
  const handleAdd = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={product.photo} alt={product.name} className={css.image} />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.textWrapper}>
          <p className={css.title}>{product.name}</p>
          <p className={css.supplier}>{product.suppliers}</p>
        </div>
        <p className={css.price}>₴{product.price}</p>
        <div className={css.btnWrapper}>
          <div className={css.buttonAddRemoveWrapper}>
            <button
              type="button"
              className={css.buttonAddRemove}
              onClick={handleAdd}
            >
              <Icon iconId="icon-plus" className={css.icon} />
            </button>
            <p className={css.quantity}>{quantity}</p>
            <button
              type="button"
              className={css.buttonAddRemove}
              onClick={handleRemove}
            >
              <Icon iconId="icon-minus" className={css.icon} />
            </button>
          </div>
          <button
            type="button"
            className={css.buttonAddToCart}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductOverview;