import css from './CartOverview.module.css';
import Icon from '../Icon/Icon.jsx';
import { useState } from 'react';

const fetchedProducts = [
  {
    id: '4',
    photo: 'https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg',
    name: 'Naproxen',
    suppliers: 'Uniliver',
    stock: '10',
    price: '56.34',
    category: 'Leg',
    description:
      "Naproxen is an NSAID that reduces inflammation and pain, particularly useful for conditions like arthritis. Although generally safe when used as directed, excessive use of this product may result in side effects. It's important to consult with a healthcare provider before using this product, especially if you are pregnant, nursing, or taking other medications. This balanced approach ensures the benefits of the product while emphasizing the need for proper use and caution.\n\nKey Benefits:\n- Supports overall health by providing essential nutrients.\n- May help in managing specific health conditions, depending on the type of product.\n- Known for its potential to enhance immune function and boost vitality.\n- Ideal for regular use to maintain well-being and support daily health needs.\n- Contains active ingredients that can contribute to your overall fitness and health goals.",
    reviews: [
      {
        id: '1',
        name: 'Jill Gregory',
        date: '2023-05-15',
        text: "Naproxen works great for joint pain, but it's a bit hard on the stomach.",
        rating: '4',
      },
    ],
  },
  {
    id: '5',
    photo: 'https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg',
    name: 'Amoxicillin',
    suppliers: 'Square',
    stock: '25',
    price: '45.99',
    category: 'Medicine',
    description:
      "Amoxicillin is an antibiotic used to treat a wide variety of bacterial infections. It works by stopping the growth of bacteria. Although generally safe when used as directed, excessive use of this product may result in side effects. It's important to consult with a healthcare provider before using this product, especially if you are pregnant, nursing, or taking other medications. This balanced approach ensures the benefits of the product while emphasizing the need for proper use and caution.\n\nKey Benefits:\n- Supports overall health by providing essential nutrients.\n- May help in managing specific health conditions, depending on the type of product.\n- Known for its potential to enhance immune function and boost vitality.\n- Ideal for regular use to maintain well-being and support daily health needs.\n- Contains active ingredients that can contribute to your overall fitness and health goals.",
    reviews: [
      {
        id: '1',
        name: 'John Doe',
        date: '2023-05-20',
        text: 'Very effective for treating infections. It cleared up my ear infection quickly.',
        rating: '5',
      },
    ],
  },
];

const CartOverview = () => {
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState(
      fetchedProducts.map(product => ({ ...product, quantity: 1 }))
  );
  
  const handleAdd = productId => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemove = productId => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  
  const handleDeleteProduct = productId => {
    console.log(productId);
  };

  return (
    <ul className={css.cartList}>
      {cart.map(product => (
        <li key={product.id} className={css.cartItem}>
          <img
            src={product.photo}
            alt={product.name}
            className={css.productImage}
          />
          <div className={css.productDetails}>
            <div className={css.productInfo}>
              <div className={css.productNameWrapper}>
                <h3 className={css.productName}>{product.name}</h3>
                <p className={css.productSupplier}>{product.suppliers}</p>
              </div>
              <p className={css.productPrice}>₴{product.price}</p>
            </div>
            <div className={css.btnWrapper}>
              <div className={css.buttonAddRemoveWrapper}>
                <button
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() => handleAdd(product.id)}
                >
                  <Icon iconId="icon-plus" className={css.icon} />
                </button>
                <p className={css.quantity}>{product.quantity}</p>
                <button
                  type="button"
                  className={css.buttonAddRemove}
                  onClick={() => handleRemove(product.id)}
                >
                  <Icon iconId="icon-minus" className={css.icon} />
                </button>
              </div>
              <button
                type="button"
                className={css.btnRemove}
                onClick={() => handleDeleteProduct(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartOverview;