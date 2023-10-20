import React from 'react';
import './NavBar.css';

function NavBar({setSearchTerm}) {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src="path_to_your_logo.png" alt="Logo" /></a>
            </div>
            <input
            className='search-bar'
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} // Use setSearchTerm to update searchTerm
      />
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/articles">Articles</a>
            </div>
        </div>
    );
}

export default NavBar;