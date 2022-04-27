import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addFavorites, removeFavorites } from '../features/user/userSlice';

import '../styles/MovieSearchCard.css'

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
            <img className="moivecard--img--img" src={poster} alt="poster"/>
        </div>
        <div className="moviecard--text">
            <h2 className="moviecard--title">{title} ({year})</h2>
            <div className="movie--genres">
              {genres.map(el => <span>{el} </span>)}
            </div>
            <p className="moviecard--summary">{summary}</p>
            <a href={officialSite}>Visit official site</a>
            {favorites.find((el)=>el.id===id) ?
              <button 
              className="moviecard--favorites--remove"
              onClick={removeHandleClick}
              >
                Remove from favorites
              </button> 
              :
              <button 
                className="moviecard--favorites--add"
                onClick={addHandleClick}
              >
                Add to favorites
              </button>
            }
            

        </div>
    </div>
  )
}
