import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import avatar1Webp from '../../images/avatar-1.webp';
import avatar1Png from '../../images/avatar-1.png';
import avatar2Webp from '../../images/avatar-2.webp';
import avatar2Png from '../../images/avatar-2.png';
import avatar3Webp from '../../images/avatar-3.webp';
import avatar3Png from '../../images/avatar-3.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviews } from '../../redux/reviews/selectors';
import { fetchReviews } from '../../redux/reviews/operations';
import css from './ReviewsSection.module.css';

const ReviewsSection = () => {
  const avatars = [
    {
      webp: avatar1Webp,
      png: avatar1Png,
    },
    {
      webp: avatar2Webp,
      png: avatar2Png,
    },
    {
      webp: avatar3Webp,
      png: avatar3Png,
    },
  ];

  const reviewsList = useSelector(selectReviews);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1439px)');

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

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
              srcSet={`${avatars[index].webp} 1x, ${avatars[index].png} 1x`}
              src={avatars[index].png}
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
