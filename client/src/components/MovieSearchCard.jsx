import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../features/user/userSlice';

import '../styles/MovieSearchCard.css'

export default function MovieSearchCard({id,title,summary,poster,year}) {
  
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(addFavorites(id));
  }
  
  return (
    <div className="moivecard--container">
        <div className="moivecard--img">
            <img className="moivecard--img--img" src={poster} alt="poster"/>
        </div>
        <div className="moviecard--text">
            <h2 className="moviecard--title">{title} ({year})</h2>
            <p className="moviecard--summary">{summary}</p>
            <button 
              className="moviecard--favorites"
              onClick={handleClick}
              >
              Add to faborites</button>
        </div>
    </div>
  )
}
