import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'modern-normalize';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/modalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
  