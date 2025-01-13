// import fetchedProducts from '../../../products.json';
// import MedicineCard from '../../components/MedicineCard/MedicineCard.jsx';
// import css from './MedicineList.module.css';

// const MedicineList = () => {
//     const products = fetchedProducts;

//     return (
//         <ul className={css.productList}>
//             {products.map(product => (
//                 <li key={product.id} className={css.productItem}>
//                     <MedicineCard product={product} />
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default MedicineList;

import MedicineCard from '../../components/MedicineCard/MedicineCard.jsx';
import css from './MedicineList.module.css';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/selectors.js';

const MedicineList = () => {
      const products = useSelector(selectProducts);

    return (
        <ul className={css.productList}>
            {products.map(product => (
                <li key={product.id} className={css.productItem}>
                    <MedicineCard product={product} />
                </li>
            ))}
        </ul>
    );
}

export default MedicineList;