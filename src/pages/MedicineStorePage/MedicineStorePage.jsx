import MedicineStores from '../../components/MedicineStores/MedicineStores.jsx';
import css from './MedicineStorePage.module.css';
import { selectIsLoading } from '../../redux/stores/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';

const MedicineStorePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <MedicineStores />
    </div>
  )
};

export default MedicineStorePage;