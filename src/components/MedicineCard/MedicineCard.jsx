import { useMediaQuery } from "@mui/material";
import ReactEllipsisText from "react-ellipsis-text";
import { useNavigate } from "react-router-dom";
import css from './MedicineCard.module.css';
import { useModal } from '../../context/modalContext.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { fetchCart, updateCart } from '../../redux/cart/operations';

const MedicineCard = ({ product }) => {
  const { openModal } = useModal();
  const loggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');
  
  const handleAddToCart = () => {
    if (!loggedIn) {
      return openModal(<LoginModal />);
    }

     fetchData();
  };
  const fetchData = async () => {
    if (!loggedIn) return;
    await dispatch(
      updateCart({ productId: product._id, quantity: 1 })
    ).unwrap();
    await dispatch(fetchCart()).unwrap();
  };
  
  const handleDetailsClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <>
      <div className={css.imgWrapper}>
        <img src={product.photo} alt={product.name} className={css.image} />
      </div>
      <div className={css.descriptionWrapper}>
        <div className={css.textWrapper}>
          {isTablet ? (
            <ReactEllipsisText
              className={css.title}
              text={product.name}
              length={12}
            />
          ) : (
            <p className={css.title}>{product.name}</p>
          )}
          <p className={css.supplier}>{product.suppliers}</p>
        </div>
        <p className={css.price}>₴{product.price}</p>
        <div className={css.btnWrapper}>
          <button
            type="button"
            className={css.buttonAdd}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            type="button"
            className={css.buttonDetails}
            onClick={handleDetailsClick}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default MedicineCard;