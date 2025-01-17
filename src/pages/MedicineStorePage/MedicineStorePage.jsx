import { useSelector } from 'react-redux';
import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { selectIsLoading } from '../../redux/stores/selectors.js';
import css from './MedicineStorePage.module.css';

const MedicineStorePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <MedicineStores />
    </div>
  );
};

export default MedicineStorePage;
