import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MedicineFilters from '../../components/MedicineFilters/MedicineFilters.jsx';
import MedicineList from '../../components/MedicineList/MedicineList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent.jsx';
import {
  fetchCategories,
  fetchProducts,
} from '../../redux/products/operations.js';
import {
  selectIsLoading,
  selectProductsPage,
} from '../../redux/products/selectors';
import { useScrollContext } from '../../context/ScrollContext.jsx';
import css from './MedicinePage.module.css';

const MedicinePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectProductsPage);
  const { headerRef } = useScrollContext();
  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    dispatch(fetchProducts({ perPage: 12, page: currentPage }));
    dispatch(fetchCategories());
    scrollToHeader();
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
  );
};

export default MedicinePage;
