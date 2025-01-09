import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import css from './MedicineStorePage.module.css';

const MedicineStorePage = () => {
  return (
    <div className={css.wrapper}>
      <MedicineStores />
    </div>
  )
};

export default MedicineStorePage;