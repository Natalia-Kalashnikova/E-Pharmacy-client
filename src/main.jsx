// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import 'modern-normalize';
// import App from './components/App/App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/modalContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//         <BrowserRouter
//       future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
//     >
//       <ModalProvider>
//         <App />
//       </ModalProvider>
//     </BrowserRouter>
//   </StrictMode>
// );
  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/modalContext.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
  