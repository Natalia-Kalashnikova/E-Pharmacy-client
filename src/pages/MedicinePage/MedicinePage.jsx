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
import { selectIsLoading, selectProductsPage } from '../../redux/products/selectors';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent.jsx';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectProductsPage);
  
  useEffect(() => {
    dispatch(fetchProducts({ perPage: 12, page: currentPage }));
    dispatch(fetchCategories());
  }, [dispatch, currentPage]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <MedicineFilters />
          <MedicineList />
           <PaginationComponent />
        </>
      )}
    </div>
  )
};

export default MedicinePage;