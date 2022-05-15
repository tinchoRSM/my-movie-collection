import React from 'react';

import './styles/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserDataFromApi, updateUserDataToApi } from './features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataFromApi());
  },[])

  useEffect(() =>{
    if(userData.loading){
      dispatch(updateUserDataToApi(userData));
    }
  },[userData])


  return (
    <div className="">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
