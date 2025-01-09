import { useLocation, useNavigate } from "react-router-dom";
import css from './MedicineStores.module.css';
import StoreCart from '../StoreCart/StoreCart.jsx';
import nearestStores from '../../nearest_pharmacies.json';
import pharmacies from '../../../pharmacies.json';
import clsx from "clsx";

const MedicineStores = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMedicineStorePage = location.pathname === '/medicine-store';
  
  const handleShopClick = () => {
    navigate('/medicine');
  };

  const getRandomStores = (stores, count) => {
    const shuffled = [...stores].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const storesNearby = nearestStores;
  const allStores = pharmacies;

  const storesToShow = isMedicineStorePage
    ? allStores
    : getRandomStores(storesNearby, 6);

  return (
    <div className={isMedicineStorePage ? css.medicineWrapper : css.wrapper}>
      {isMedicineStorePage ? (
        <h2 className={css.medicineTitle}>Medicine store</h2>
      ) : (
        <div className={css.textWrapper}>
          <h3 className={css.title}>Your Nearest Medicine Store</h3>
          <p className={css.paragraph}>
            Search for Medicine, Filter by your location
          </p>
        </div>
      )}
      <ul
        className={clsx(css.storesList, {
          [css.medicineStoreList]: isMedicineStorePage,
        })}
      >
        {storesToShow.map((store, index) => (
          <li
            key={index}
            className={clsx(css.storeItem, {
              [css.medicineStoreItem]: isMedicineStorePage,
            })}
            onClick={isMedicineStorePage ? undefined : handleShopClick}
          >
            <StoreCart
              store={store}
              isMedicineStorePage={isMedicineStorePage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineStores;