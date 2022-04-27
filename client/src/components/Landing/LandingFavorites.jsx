import React from 'react'
import { useSelector } from 'react-redux';

import "../../styles/Landing.css";
import EmptyFavorites from '../Utility/EmptyFavorites';

export default function LandingFavorites() {

  const {favorites} = useSelector((store) => store.user)


  const favoritesElements = favorites.map((el)=>{
      return <img className="landing--favorite--img" key={el.id} src={el.poster} alt="poster"/>
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
