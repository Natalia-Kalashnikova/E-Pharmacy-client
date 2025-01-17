import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Icon from '../Icon/Icon.jsx';
import mobileBanner1x from '../../images/baner-mobile@1x.png';
import mobileBanner2x from '../../images/baner-mobile@2x.png';
import desktopBanner1x from '../../images/baner@1x.png';
import desktopBanner2x from '../../images/baner@2x.png';
import css from './AddPharmacyPromo.module.css';

const AddPharmacyPromo = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:767px)');
  
  const handleBtnClick = () => {
    navigate('/medicine-store');
  };

  return (
    <div className={css.mainWrapper}>
      <div className={css.wrapper}>
        <div className={css.btnTextWrapper}>
          <div className={css.textWrapper}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.paragraph}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
          </div>
          <button
            aria-label="Buy"
            type="button"
            className={css.button}
            onClick={handleBtnClick}>
            Buy medicine
          </button>
        </div>
        {isMobile ? (
          <img
            srcSet={`${mobileBanner1x} 1x, ${mobileBanner2x} 2x`}
            src={mobileBanner1x}
            alt="Promo"
            className={css.promoImage}
          />
        ) : (
          <img
            srcSet={`${desktopBanner1x} 1x, ${desktopBanner2x} 2x`}
            src={desktopBanner1x}
            alt="Promo"
            className={css.promoImage}
          />
        )}
      </div>
      <ul className={css.featuresList}>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Take user orders form online</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Create your shop profile</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Manage your store</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Get more orders</p>
        </li>
        <li className={css.featuresItem}>
          <Icon iconId="icon-lightning" className={css.icon} />
          <p className={css.featuresParagraph}>Storage shed</p>
        </li>
      </ul>
    </div>
  );
};

export default AddPharmacyPromo;
