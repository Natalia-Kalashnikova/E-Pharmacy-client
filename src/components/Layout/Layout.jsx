import { Toaster } from 'react-hot-toast';
import NavigationBar from '../Header/NavigationBar/NavigationBar.jsx';
import css from './Layout.module.css';
import clsx from 'clsx';
import { toastStyle } from '../../utils/toastStyle.js';
import Footer from '../Footer/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className={clsx(css.container)}>
      <NavigationBar />
      <main className={css.content}>
        <Toaster position="top-right" toastOptions={toastStyle} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;