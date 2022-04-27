import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { setSearchInput } from '../features/search/searchSlice';
import "../styles/Navigation.css"
import { getMoviesFromApi } from '../features/movies/moviesSlice';

export default function Navigation() {

  const {input} = useSelector((store) => store.search)
  const dispatch = useDispatch();

  function handleChange(event){
    const text = event.target.value;
    dispatch(setSearchInput(text));
}

  return (
    <nav>
      <div className="nav--title">
        <Link style={{textDecoration: "none", color: "black"}} to="/">
          <h1 >My Movie Collection</h1>
        </Link>
      </div>
      <div className="nav--search">
        <input 
          className="nav--search--bar" 
          type="text" 
          placeholder="Search by movie tittle..."
          onChange={handleChange}
        />
        
        <Link to="/search"> 
          <button onClick={()=> dispatch(getMoviesFromApi(input))} className="nav--search--button">Search</button>
        </Link>
      </div>
        
    </nav>
  )
}
