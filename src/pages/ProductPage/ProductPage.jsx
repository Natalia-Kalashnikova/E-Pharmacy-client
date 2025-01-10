import ProductOverview from '../../components/ProductOverview/ProductOverview.jsx';
import TabsContainer from '../../components/TabsContainer/TabsContainer.jsx';
import css from './ProductPage.module.css';
import products from '../../../products.json';
import { useParams } from 'react-router-dom';


const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === productId);

   return (
    <div className={css.wrapper}>
      <ProductOverview product={product} />
      <TabsContainer product={product} />
    </div>
  );
};

export default ProductPage;