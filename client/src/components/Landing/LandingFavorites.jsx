import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import "../../styles/Landing.css";
import EmptyFavorites from '../Utility/EmptyFavorites';

export default function LandingFavorites() {

  const {favorites} = useSelector((store) => store.user)


  const favoritesElements = favorites.map((el)=>{
      return <Link key={nanoid()} to={`/movie/${el.id}`}>
          <img className="landing--favorite--img" src={el.poster} alt="poster"/>
        </Link>
    }
  )

  return (
    <div className="landing--favorites"> 
        <div className="landing--favorites--container">
            <h1 className="landing--favorites--text">Your Favorites</h1>
            <div className="landing--favorites--elements">
              {favoritesElements ? favoritesElements : <EmptyFavorites/>}
            </div>
        </div>
    </div>
  )
}
