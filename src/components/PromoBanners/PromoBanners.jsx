import { NavLink } from 'react-router-dom';
import css from './PromoBanners.module.css';

const PromoBanners = () => {
  return (
    <ul className={css.promoBannersList}>
      <li className={css.promoItem}>
        <div className={css.headlineWrap}>
          <div className={css.numContainer}>1</div>
          <p className={css.headlineText}>Huge Sale</p>
        </div>
        <div className={css.bottomWrap}>
          <p className={css.percentage}>70%</p>
          <NavLink to="/medicine" className={css.link}>
            Shop now
          </NavLink>
        </div>
      </li>
      <li className={css.promoItem}>
        <div className={css.headlineWrap}>
          <div className={css.numContainer}>2</div>
          <p className={css.headlineText}>Secure delivery</p>
        </div>
        <div className={css.bottomWrap}>
          <p className={css.percentage}>100%</p>
          <NavLink to="/medicine" className={css.link}>
            Read more
          </NavLink>
        </div>
      </li>
      <li className={css.promoItem}>
        <div className={css.headlineWrap}>
          <div className={css.numContainer}>3</div>
          <p className={css.headlineText}>Off</p>
        </div>
        <div className={css.bottomWrap}>
          <p className={css.percentage}>35%</p>
          <NavLink className={css.link} to="/medicine">
            Shop now
          </NavLink>
        </div>
      </li>
    </ul>
  );
};

export default PromoBanners;
