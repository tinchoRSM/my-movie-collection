import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addFavorites, removeFavorites } from '../features/user/userSlice';
import { Link } from 'react-router-dom';

import '../styles/MovieSearchCard.css'
import { nanoid } from '@reduxjs/toolkit';

export default function MovieSearchCard({id,title,summary,poster,year,genres,officialSite}) {
  
  const dispatch = useDispatch();

  const {favorites} = useSelector((store) => store.user)

  function addHandleClick(){
    dispatch(addFavorites({id:id,poster:poster}));
  }

  function removeHandleClick(){
    dispatch(removeFavorites(id));
  }
  
  return (
    <div className="moivecard--container">
        <div className="moivecard--img">
          <Link to={`/movie/${id}`}>
            <img className="moivecard--img--img" src={poster} alt="poster"/>
          </Link>
        </div>
        <div className="moviecard--text">
            <h2 className="moviecard--title">
              <Link style={{textDecoration: "none", color: "black"}} to={`/movie/${id}`}>{title} ({year})</Link>
            </h2>
            <div className="movie--genres">
              {genres.map(el => <span key={nanoid()}>{el} </span>)}
            </div>
            <p className="moviecard--summary">{summary}</p>
            <a href={officialSite}>Visit official site</a>
            <div className="moviecard--buttons">
              {favorites.find((el)=>el.id===id) ?
              <button 
              className="favorites--remove"
              onClick={removeHandleClick}
              >
                Remove from favorites
              </button> 
              :
              <button 
                className="favorites--add"
                onClick={addHandleClick}
              >
                Add to favorites
              </button>
              }
            </div>
            

        </div>
    </div>
  )
}
