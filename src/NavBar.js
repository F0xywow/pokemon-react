import React from 'react';
import './NavBar.css';
import logo from './pikachu.png'

function NavBar({setSearchTerm}) {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="searchbar">
            <input
            className='search-bar'
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} // Use setSearchTerm to update searchTerm
      />
      </div>
            <div className="links">
                <a href="/">Home</a>
            </div>
        </div>
    );
}

export default NavBar;