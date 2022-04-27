import React from 'react';

import './styles/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="">
      <Navigation />

      <Outlet/>
    </div>
  );
}

export default App;
