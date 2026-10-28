import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouterProvider from './router/router';
import { AppProvider } from './redux/store';
import { ImageModal, TextModal } from './components/modal/modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <AppRouterProvider />
      <ImageModal />
      <TextModal />
    </AppProvider>
  </React.StrictMode>
);
