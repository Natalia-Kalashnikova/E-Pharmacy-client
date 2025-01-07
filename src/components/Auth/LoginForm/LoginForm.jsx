import { useState } from "react";
import loginSchema from '../../../validation/loginSchema.js';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import css from './LoginForm.module.css';
import clsx from "clsx";
import Icon from '../../Icon/Icon.jsx';
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
    
    const onSubmit = data => {
    console.log(data);
    reset();
    };
    
    const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    };
    
    const handlePasswordFocus = () => {
    setIsPasswordTouched(true);
    };
    
    const handlePasswordBlur = () => {
    setIsPasswordTouched(false);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputWrapper}>
        <label className={css.labelWrapper}>
          <input
            type="email"
            {...register('email')}
            placeholder="Email address"
            className={clsx(css.input, { [css.inputError]: errors.email })}
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email?.message}</p>
          )}
        </label>
        <label className={css.labelWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            autoComplete="on"
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className={clsx(css.input, {
              [css.inputError]: errors.password,
              [css.inputSuccess]: !errors.password && getValues('password'),
            })}
          />
          <button
            className={css.showPasswordBtn}
            type="button"
            onClick={handleClickShowPassword}
          >
            {showPassword ? (
              <Icon className={css.icon} iconId="icon-eye-off" />
            ) : (
              <Icon className={css.icon} iconId="icon-eye" />
            )}
          </button>
          {!errors.password && isPasswordTouched && getValues('password') && (
            <>
              <p className={clsx(css.errorMessage, css.successMessage)}>
                Password is valid!
              </p>
            </>
          )}
          {errors.password && (
            <>
              <p className={css.errorMessage}>{errors.password.message}</p>
            </>
          )}
        </label>
      </div>
      <div className={css.btnWrapper}>
        <button type="submit" className={css.btn}>
          Log in
        </button>
        <NavLink to="/register" className={css.linkLogin}>
          Don't have an account?
        </NavLink>
      </div>
    </form>
  );
        
}

export default LoginForm;