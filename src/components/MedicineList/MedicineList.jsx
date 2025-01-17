import { useSelector } from 'react-redux';
import MedicineCard from '../../components/MedicineCard/MedicineCard.jsx';
import { selectProducts } from '../../redux/products/selectors.js';
import css from './MedicineList.module.css';

const MedicineList = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      <ul className={css.productList}>
        {products.length === 0 && (
          <p className={css.noProducts}>No products found:(</p>
        )}
        {products.map(product => (
          <li key={product.id} className={css.productItem}>
            <MedicineCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MedicineList;
