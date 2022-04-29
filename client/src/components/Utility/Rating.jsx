import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRating } from '../../features/rating/ratingSclice';
import { addRating, chnageRating } from '../../features/user/userSlice';

import { ReactComponent as StarSVG } from "../../img/svg/star.svg";

import "../../styles/index.css"

export default function Rating(props) {

    const {ratings} = useSelector((store) => store.user);
    const rating = useSelector((store) => store.rating);
    const dispatch = useDispatch()

    const movieId = parseInt(props.movieId);

    const userRating = ratings.find(el => el.id === movieId);

    useEffect(() =>{
        if(userRating){  
            dispatch(setRating(userRating))
        }
    },[]);

    const stars = [1,2,3,4,5];

    function handleClick(id){
        dispatch(setRating({id: movieId,rating: id}));
    }

    useEffect(() =>{
        if(userRating){
            dispatch(chnageRating(rating))
        }
        else {
            dispatch(addRating(rating))
        }
    },[rating]);

    
    

    const starsElemets = stars.map( (el)=>{
        return <Star key={el} id={el} rating={rating.rating} handleClick={() =>handleClick(el)}/>
    })

    return (
        <div className="rating">
            {starsElemets}
        </div>
    )
}

function Star(props){
    return( 
        <div className="rating--star" onClick={props.handleClick}>
            <StarSVG className={props.rating>=props.id ?"svg svg--clicked" : "svg"} />
        </div>
    )
}
