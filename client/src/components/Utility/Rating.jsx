import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addRating } from '../../features/user/userSlice';

import { ReactComponent as StarSVG } from "../../img/svg/star.svg";

import "../../styles/index.css"

export default function Rating(props) {
    

    const {ratings} = useSelector((store) => store.user);
    const dispatch = useDispatch()

    const userRating = ratings.find(el => el.id === props.movieId);

    const [rating, setRating] = useState(0);


    const stars = [1,2,3,4,5];

    function handleClick(id){
        setRating(id);

        if(userRating){
            console.log("do nothing");
        }
        else {
            dispatch(addRating({id: props.movieId,rating: id}))
        }
    
    }

    const starsElemets = stars.map( (el)=>{
        return <Star key={el} id={el} rating={rating} handleClick={() =>handleClick(el)}/>
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
