import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/home" replace /> : children;
};
export default RestrictedRoute;