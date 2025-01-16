import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import css from './PaginationComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../../redux/stores/selectors';
import { useLocation } from 'react-router-dom';
import { selectProductsPage, selectProductsTotalPages } from '../../redux/products/selectors';
import { changePage } from '../../redux/stores/slice';
import { changeProductsPage } from '../../redux/products/slice';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  let currentPage = 1;
  const pageCount = useSelector(selectTotalPages) || 1;
  const pageProductsCount = useSelector(selectProductsTotalPages) || 1;
  const location = useLocation();

  if (location.pathname === '/medicine-store') {
    currentPage = useSelector(selectPage) || 1;
  } else if (location.pathname === '/medicine') {
    currentPage = useSelector(selectProductsPage) || 1;
  }
  
  const handleChange = (event, value) => {
    if (location.pathname === '/medicine-store') {
      dispatch(changePage(value));
    } else if (location.pathname === '/medicine') {
      dispatch(changeProductsPage(value));
    }
  };
  return (
    <div className={css.wrapper}>
      <Stack spacing={2} className={css.pagination}>
         {(location.pathname === '/medicine' ? pageProductsCount : pageCount) >
          1 && (
          <Pagination
            count={
              location.pathname === '/medicine' ? pageProductsCount : pageCount
            }
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