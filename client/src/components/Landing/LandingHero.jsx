import React from 'react';
import { Link } from 'react-router-dom';


import "../../styles/Landing.css";

export default function LandingHero() {
  return (
    <div className="landing--hero">
      <div className="landing--hero--container">
        <h1>Welcome to your Movie Collection</h1> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
        <div>
          <Link to="/search">
            <button>Search</button>
          </Link>
          
        </div>
      </div> 
      
    </div>
  )
}
