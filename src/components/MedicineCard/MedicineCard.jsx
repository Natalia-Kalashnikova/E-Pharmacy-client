import { useMediaQuery } from "@mui/material";
import ReactEllipsisText from "react-ellipsis-text";
import { NavLink } from "react-router-dom";
import css from './MedicineCard.module.css';

const MedicineCard = ({product}) => {
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');
  const handleAddToCart = () => {
    console.log(product);
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
          <NavLink to={`/product/${product.id}`} className={css.buttonDetails}>
            Details
          </NavLink>
        </div>
      </div>
    </>
    )
    

}

export default MedicineCard;