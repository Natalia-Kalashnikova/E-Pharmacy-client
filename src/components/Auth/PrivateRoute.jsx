import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
// const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;