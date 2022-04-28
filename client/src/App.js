import React from 'react';

import './styles/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserDataFromApi } from './features/user/userSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataFromApi());
  },[])

  return (
    <div className="">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
