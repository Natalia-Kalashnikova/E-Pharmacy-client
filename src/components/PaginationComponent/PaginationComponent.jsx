import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { selectPage, selectTotalPages } from '../../redux/stores/selectors';
import {
  selectProductsPage,
  selectProductsTotalPages,
} from '../../redux/products/selectors';
import { changePage } from '../../redux/stores/slice';
import { changeProductsPage } from '../../redux/products/slice';
import { useScrollContext } from '../../context/ScrollContext.jsx';
import css from './PaginationComponent.module.css';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { headerRef } = useScrollContext();

  const storePage = useSelector(selectPage) || 1;
  const productsPage = useSelector(selectProductsPage) || 1;
  const totalStorePages = useSelector(selectTotalPages) || 1;
  const totalProductsPages = useSelector(selectProductsTotalPages) || 1;

  const currentPage =
    location.pathname === '/medicine-store' ? storePage : productsPage;
  const pageCount =
    location.pathname === '/medicine-store'
      ? totalStorePages
      : totalProductsPages;

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (event, value) => {
    scrollToHeader();
    if (location.pathname === '/medicine-store') {
      dispatch(changePage(value));
    } else if (location.pathname === '/medicine') {
      dispatch(changeProductsPage(value));
    }
  };

  return (
    <div className={css.wrapper}>
      <Stack spacing={2} className={css.pagination}>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            siblingCount={0}
            boundaryCount={1}
            sx={{
              '& .MuiPaginationItem-root': {
                border: '1px solid rgba(29, 30, 33, 0.05);',
                borderRadius: '30px',
                padding: '10px',
                width: '44px',
                height: '44px',
                color: 'rgb(29, 30, 33);',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '18px',
                textAlign: 'center',
              },
              '& .MuiPaginationItem-root:hover': {
                background: '#59B17A',
                color: 'white',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                background: '#59B17A',
                color: 'white',
              },
              '& .MuiPaginationItem-root.Mui-selected:hover': {
                background: '#59B17A',
                color: 'white',
              },
            }}
          />
        )}
      </Stack>
    </div>
  );
};

export default PaginationComponent;
