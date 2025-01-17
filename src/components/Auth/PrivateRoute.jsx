import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
