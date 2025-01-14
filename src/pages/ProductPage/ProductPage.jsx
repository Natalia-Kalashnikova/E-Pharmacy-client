import ProductOverview from '../../components/ProductOverview/ProductOverview.jsx';
import TabsContainer from '../../components/TabsContainer/TabsContainer.jsx';
import css from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import { selectSelectedProduct } from '../../redux/products/selectors.js';
import { fetchProductsById } from '../../redux/products/operations.js';
import { selectIsLoading } from '../../redux/products/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectSelectedProduct);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductsById(productId));
    }
  }, [dispatch, productId]);

   return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && !product && <p>Product not found or failed to load</p>}
      {!isLoading && product && (
        <>
          <ProductOverview product={product} />
          <TabsContainer product={product} />
        </>
      )}
    </div>
  );
};

export default ProductPage;