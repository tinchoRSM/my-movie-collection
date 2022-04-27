import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getMoviesFromApi } from '../features/movies/moviesSlice';
import MovieSearchCard from './MovieSearchCard';

import "../styles/Search.css"
import EmptySearch from './Utility/EmptySearch';
import { setSearchInput } from '../features/search/searchSlice';

export default function Search() {

    const {movies} = useSelector((store) => store.movies);
    const {input} = useSelector((store) => store.search)

    const dispatch = useDispatch();


    //const [searchInput, setSearchInput] = useState("");
    const [searchInit, setSearchInit] = useState(false);

    useEffect(()=>{
        if(input !== ""){
            dispatch(getMoviesFromApi(input));
        }
    },[searchInit]);

    function handleChange(event){
        const text = event.target.value;
        dispatch(setSearchInput(text));
    }

    function handleClick(){
        setSearchInit(prevState => !prevState);

    }

    const movieElements = movies.map((movie) => {
        return <MovieSearchCard key={movie.id} {...movie}/>; 
    }
        
        )

    return (
        <div className="search--container">
            <div className="search--tittle">
                <h1>Search</h1>
            </div>
            <div className="search--input">
                <input 
                    className="search--input--text"
                    type="text" 
                    placeholder="Search by movie title..."
                    onChange={handleChange}
                    />
                <button 
                    className="search--input--button"
                    onClick={handleClick}
                    >
                        Search
                </button>
            </div>
            
            <div className="serch--results">
                {movieElements.length>1 ? movieElements : <EmptySearch/>}
            </div>
        </div>


  )
}
