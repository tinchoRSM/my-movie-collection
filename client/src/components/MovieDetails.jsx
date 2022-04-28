import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorites, removeFavorites } from '../features/user/userSlice';

import "../styles/MovieDetails.css"
import Rating from './Utility/Rating';

export default function MovieDetails() {
    const params = useParams();

    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);

    const moiveId = params.id || 5;

    useEffect(() => {
        fetch(`http://localhost:8080/movies/movie/${moiveId}`)
            .then(response => response.json())
            .then(data => {
                setMovieData(data);
                setLoading(false);
            }
            );
    }, [])

    const dispatch = useDispatch();

    const { favorites } = useSelector((store) => store.user)

    function addHandleClick() {
        dispatch(addFavorites(
            {
                id: movieData.id,
                poster: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
            }
        ));
    }

    function removeHandleClick() {
        dispatch(removeFavorites(movieData.id));
    }

    return (
        <div className="movie--details--container">
            {movieData && <div className="movie--details">
                <div className="movie--details--image">
                    {!loading && <img
                        className="movie--details--img"
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt="poster"
                    />}
                </div>
                <div className="movie--details--info">
                    <h1 className="movie--details--title">
                        {movieData.original_title}
                        ({movieData.release_date})
                    </h1>
                    <p className="movie--details--genres">
                        {!loading && movieData.genres.map(el => {
                            return <span key={nanoid()}>{el.name} </span>
                        })} | {movieData.runtime} minutes
                    </p>
                    <p className="movie--details--sumary">{movieData.overview}</p>
                    <a href={movieData.homepage} className="movie--details--officialsite">Vist official site</a>
                    <div className="movie--details--favorites">
                        {favorites.find((el) => el.id === movieData.id) ?
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
            }
            <div className="movie--rating">
                <Rating movieId={movieData.id}/>
            </div>
        </div>
    )
}
