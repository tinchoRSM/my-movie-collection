import React from 'react';

import './styles/App.css';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserDataFromApi, postUserDataToApi, updateUserDataToApi } from './features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataFromApi());
  },[])

  useEffect(() =>{
    dispatch(updateUserDataToApi(userData));
  },[userData])

  const handleClick = () =>{
    dispatch(postUserDataToApi(userData));
  }

  return (
    <div className="">
      <button onClick={handleClick}>Send data to server</button>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
