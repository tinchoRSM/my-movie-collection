import React from 'react'
import { useSelector } from 'react-redux';

import "../../styles/Landing.css";

export default function LandingFavorites() {

  const {favorites} = useSelector((store) => store.user)


  const favoritesElements = favorites.map((el)=>{
    return <p key={el}>{el}</p>
    
  }
    
  )

  return (
    <div className="landing--favorites"> 
        <div className="landing--favorites--container">
            <h1>Your Favorites</h1>
            <div>
              {favoritesElements}
            </div>
        </div>
    </div>
  )
}
