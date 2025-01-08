import ReactEllipsisText from 'react-ellipsis-text';
import css from './StoreCart.module.css';
import Icon from '../Icon/Icon.jsx';
import clsx from "clsx";

const StoreCart = ({store}) => {
    return (
    <>
      <ReactEllipsisText
        className={css.storeName}
        text={store.name}
        length={'15'}
      />
      <div className={css.addressWrapper}>
        <Icon iconId="icon-map-pin" className={css.iconInfo} />
        <p className={css.storeInfo}>{store.address}</p>
      </div>
      <div className={css.phoneWrapper}>
        <Icon iconId="icon-phone" className={css.iconInfo} />
        <p className={css.storeInfo}>{store.phone}</p>
      </div>
      <div className={css.infoWrapper}>
        <div className={css.ratingWrapper}>
          <Icon iconId="icon-star" className={css.iconStar} />
          <span className={css.rating}>{store.rating}</span>
        </div>
        <div className={clsx(css.openFlag, { [css.open]: store.isOpen })}>
          {store.isOpen ? 'OPEN' : 'CLOSE'}
        </div>
      </div>
    </>
  );
};


export default StoreCart;