import { Rating, useMediaQuery } from '@mui/material';
import Icon from '../../components/Icon/Icon.jsx';
import css from './Reviews.module.css';

const Reviews = ({ product }) => {
  const isMobile = useMediaQuery('(max-width:767px)');

    return (
    <ul className={css.wrapperList}>
      {product.reviews.map(review => (
        <li key={review.id} className={css.reviewItem}>
          <div className={css.nameWrapper}>
            <div className={css.avatar}>
              <p className={css.firstLetter}>{review.name[0]}</p>
            </div>
            <div className={css.infoWrapper}>
              <p className={css.name}>{review.name}</p>
              <p className={css.date}>{review.date}</p>
            </div>
            <div className={css.ratingWrapper}>
              {isMobile ? (
                <Icon iconId="icon-star" className={css.starIcon} />
              ) : (
                <Rating name="read-only" value={review.rating} readOnly />
              )}
              <p className={css.ratingValue}>{review.rating}</p>
            </div>
          </div>
          <p className={css.text}>{review.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;