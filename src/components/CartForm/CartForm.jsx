import { useForm } from 'react-hook-form';
import CartFormSchema from '../../validation/cartFormSchema.js';
import css from './CartForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';
import { useNavigate } from 'react-router-dom';
import { checkoutCart } from '../../redux/cart/operations';
import { useDispatch } from 'react-redux';
import { useScrollContext } from '../../context/ScrollContext.jsx';

const CartForm = () => {
  const [paymentType, setPaymentType] = useState('cash');
  const cart = useSelector(selectCart);
  const cartTotal = parseFloat(
    cart
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      .toFixed(2)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { headerRef } = useScrollContext();
  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CartFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: 'cash',
    },
  });
    
  const onSubmit = data => {
     dispatch(
      checkoutCart({
        paymentMethod: paymentType,
        shippingInfo: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
        },
      })
    );

    reset();
    navigate('/home');
    scrollToHeader();
    };
    
  const handlePaymentRadioChange = e => {
    const { value } = e.target;
    setPaymentType(value);
    };
    
  return (
    <div className={css.mainWrapper}>
      <div className={css.infoWrapper}>
        <h4 className={css.smallerTitle}>Enter shipping info</h4>
        <p className={css.paragraph}>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
      </div>
      <form
        id="cart-form"
        onSubmit={handleSubmit(onSubmit)}
        className={css.form}
      >
        <div className={css.inputWrapper}>
          <label className={css.labelWrapper}>
            <p className={css.labelText}>Name</p>
            <input
              type="text"
              {...register('name')}
              placeholder="Enter your name"
              className={clsx(css.input, { [css.inputError]: errors.name })}
            />
            {errors.name && (
              <p className={css.errorMessage}>{errors.name?.message}</p>
            )}
          </label>
        </div>
        <div className={css.inputWrapper}>
          <label className={css.labelWrapper}>
            <p className={css.labelText}>Email</p>
            <input
              type="email"
              {...register('email')}
              placeholder="Enter your email"
              className={clsx(css.input, { [css.inputError]: errors.email })}
            />
            {errors.email && (
              <p className={css.errorMessage}>{errors.email?.message}</p>
            )}
          </label>
        </div>
        <div className={css.inputWrapper}>
          <label className={css.labelWrapper}>
            <p className={css.labelText}>Phone</p>
            <input
              type="tel"
              {...register('phone')}
              placeholder="Enter your phone"
              className={clsx(css.input, { [css.inputError]: errors.phone })}
            />
            {errors.phone && (
              <p className={css.errorMessage}>{errors.phone?.message}</p>
            )}
          </label>
        </div>
        <div className={css.inputWrapper}>
          <label className={css.labelWrapper}>
            <p className={css.labelText}>Address</p>
            <input
              type="text"
              {...register('address')}
              placeholder="Enter your address"
              className={clsx(css.input, { [css.inputError]: errors.address })}
            />
            {errors.address && (
              <p className={css.errorMessage}>{errors.address?.message}</p>
            )}
          </label>
        </div>
      </form>
      <div className={css.divider} />
      <div className={css.paymentMethodWrapper}>
        <div className={css.infoWrapper}>
          <h4 className={css.smallerTitle}>Payment method</h4>
          <p className={css.paragraph}>
            You can pay us in a multiple way in our payment gateway system.
          </p>
        </div>
        <div className={css.radioWrapper}>
          <label
            className={clsx(css.radioLabel, {
              [css.radioLabelChecked]: paymentType === 'cash',
            })}
          >
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={paymentType === 'cash'}
              onChange={handlePaymentRadioChange}
              className={css.radio}
            />
            <span className={css.radioCustom} />
            Cash On Delivery
          </label>
          <label
            className={clsx(css.radioLabel, {
              [css.radioLabelChecked]: paymentType === 'creditCard',
            })}
          >
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentType === 'creditCard'}
              onChange={handlePaymentRadioChange}
              className={css.radio}
            />
            <span className={css.radioCustom} />
            Credit Card
          </label>
        </div>
      </div>
      <div className={css.divider} />
      <div className={css.orderDetailsWrapper}>
        <div className={css.infoWrapper}>
          <h4 className={css.smallerTitle}>Order details</h4>
          <p className={css.paragraph}>
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
        </div>
        <div className={css.totalWrapper}>
          <p className={css.total}>Total:</p>
          <p className={css.totalPrice}>₴{cartTotal}</p>
        </div>
        <button aria-label="Order" type="submit" form="cart-form" className={css.button}>
          Place order
        </button>
      </div>
    </div>
  );
};

export default CartForm;