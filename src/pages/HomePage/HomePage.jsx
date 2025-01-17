import { useSelector } from 'react-redux';
import MainBanner from '../../components/MainBanner/MainBanner.jsx';
import PromoBanners from '../../components/PromoBanners/PromoBanners.jsx';
import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import AddPharmacyPromo from '../../components/AddPharmacyPromo/AddPharmacyPromo.jsx';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { selectIsLoading } from '../../redux/stores/selectors.js';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <>
        <MainBanner />
        <PromoBanners />
        <MedicineStores />
        <AddPharmacyPromo />
        <ReviewsSection />
      </>
    </div>
  );
};

export default HomePage;
