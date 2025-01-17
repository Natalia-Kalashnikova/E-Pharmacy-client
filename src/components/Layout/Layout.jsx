import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import NavigationBar from '../Header/NavigationBar/NavigationBar.jsx';
import Footer from '../Footer/Footer.jsx';
import { toastStyle } from '../../utils/toastStyle.js';
import { ScrollProvider } from '../../context/ScrollContext.jsx';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const isAuthorizationPage =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <ScrollProvider>
      <div className={css.container}>
        <NavigationBar />
        <main
          className={clsx(css.content, {
            [css.authorizationPage]: isAuthorizationPage,
          })}>
          <Toaster position="top-right" toastOptions={toastStyle} />
          {children}
        </main>
        {!isAuthorizationPage && <Footer />}
      </div>
    </ScrollProvider>
  );
};

export default Layout;
