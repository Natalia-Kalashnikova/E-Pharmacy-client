import css from './ReviewsSection.module.css';
import reviews from '../../../reviews.json';
import { useMediaQuery } from '@mui/material';

const ReviewsSection = () => {
  const reviewsList = reviews;
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1439px)');
  let visibleReviews;

  if (isMobile) {
    visibleReviews = reviewsList.slice(0, 1);
  } else if (isTablet) {
    visibleReviews = reviewsList.slice(0, 2);
  } else {
    visibleReviews = reviewsList.slice(0, 3);
  }

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Reviews</h3>
        <p className={css.paragraph}>
          Search for Medicine, Filter by your location
        </p>
      </div>
      <ul className={css.reviewsList}>
        {visibleReviews.map((review, index) => (
          <li key={review.id} className={css.reviewItem}>
            <img
              srcSet={`/src/images/avatar-${index + 1}.webp 1x, /src/images/avatar-${index + 1}.png 1x`}
              src={`/src/images/avatar-${index}.png`}
              alt="reviewer"
              className={css.avatar}
            />
            <p className={css.name}>{review.name}</p>
            <p className={css.testimonial}>{review.testimonial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsSection;