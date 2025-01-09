import css from './MedicinePage.module.css';
import MedicineFilters from '../../components/MedicineFilters/MedicineFilters.jsx';
import MedicineList from '../../components/MedicineList/MedicineList.jsx';


const MedicinePage = () => {
  return (
    <div className={css.wrapper}>
      <MedicineFilters />
      <MedicineList />
    </div>
  )
};

export default MedicinePage;