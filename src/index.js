import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AllergyControl from './AllergyControl';
import { store } from './store/store';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store } >
      <BrowserRouter>
        <AllergyControl />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
