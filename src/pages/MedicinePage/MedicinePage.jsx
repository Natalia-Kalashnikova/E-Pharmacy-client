import css from './MedicinePage.module.css';
import MedicineFilters from '../../components/MedicineFilters/MedicineFilters.jsx';
import MedicineList from '../../components/MedicineList/MedicineList.jsx';
import { useDispatch } from 'react-redux';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations.js';
import { useEffect } from 'react';

const MedicinePage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <MedicineFilters />
      <MedicineList />
    </div>
  )
};

export default MedicinePage;