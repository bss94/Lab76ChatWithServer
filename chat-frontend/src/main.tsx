import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';
import {CssBaseline} from '@mui/material';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <ToastContainer/>
      <App/>
    </Provider>
  </StrictMode>,
);
