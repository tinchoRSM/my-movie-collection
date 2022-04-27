import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from './store.js';
import { Provider } from 'react-redux';
import Search from './components/Search';
import Landing from './components/Landing/Landing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Landing/>}/>
            <Route path="/search" element={<Search/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

