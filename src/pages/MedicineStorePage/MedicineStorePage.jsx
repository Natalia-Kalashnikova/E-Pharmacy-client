import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import css from './MedicineStorePage.module.css';
import medicineStores from '../../../pharmacies.json';

const MedicineStorePage = () => {
  const stores = medicineStores;
  return (
    <div className={css.wrapper}>
      <MedicineStores />
    </div>
  )
};

export default MedicineStorePage;