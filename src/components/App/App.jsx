import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import Layout from '../Layout/Layout.jsx';
import RestrictedRoute from '../Auth/RestrictedRoute.jsx';
import PrivateRoute from '../Auth/PrivateRoute.jsx';

const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
const CartPage = lazy(() => import('../../pages/CartPage/CartPage.jsx'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage.jsx'));
const MedicineStorePage = lazy(() => import('../../pages/MedicineStorePage/MedicineStorePage.jsx'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MedicinePage = lazy(() => import('../../pages/MedicinePage/MedicinePage.jsx'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
