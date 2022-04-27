import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navigation.css"

export default function Navigation() {
  return (
    <nav>
      <div className="nav--title">
        <Link to="/">
          <h1>My Movie Collection</h1>
        </Link>
      </div>
      <div className="nav--search">
        <input className="nav--search--bar" type="text" placeholder="Search by movie tittle..."/>
        <button className="nav--search--button">Search</button>
      </div>
        
    </nav>
  )
}
