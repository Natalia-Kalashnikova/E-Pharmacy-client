import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import css from './HomePage.module.css';
import PromoBanners from '../../components/PromoBanners/PromoBanners.jsx';
import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import AddPharmacyPromo from '../../components/AddPharmacyPromo/AddPharmacyPromo.jsx';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <AddPharmacyPromo />
    </div>
  )
};

export default HomePage;