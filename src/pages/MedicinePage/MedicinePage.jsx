import css from './MedicinePage.module.css';
import MedicineFilters from '../../components/MedicineFilters/MedicineFilters.jsx';
import MedicineList from '../../components/MedicineList/MedicineList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations.js';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import { selectIsLoading } from '../../redux/products/selectors';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <MedicineFilters />
          <MedicineList />
        </>
      )}
    </div>
  )
};

export default MedicinePage;