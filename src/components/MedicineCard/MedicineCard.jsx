import { useMediaQuery } from "@mui/material";
import ReactEllipsisText from "react-ellipsis-text";
import { useNavigate } from "react-router-dom";
import css from './MedicineCard.module.css';
import { useModal } from '../../context/modalContext.jsx';
import LoginModal from '../LoginModal/LoginModal.jsx';

const MedicineCard = ({ product }) => {
  const { openModal } = useModal();
  const loggedIn = false;
  const navigate = useNavigate();

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');
  
  const handleAddToCart = () => {
    if (!loggedIn) {
      return openModal(<LoginModal />);
    }
    console.log(product);
  };
  
  const handleDetailsClick = () => {
    navigate(`/product/${product.id}`);
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