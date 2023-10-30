// PokedexList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PokedexList() {
    const [pokedexes, setPokedexes] = useState([]);

    useEffect(() => {
        const fetchPokedexes = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokedex');
            const data = await response.json();
            setPokedexes(data.results);
        };

        fetchPokedexes();
    }, []);

    return (
        <div>
            {pokedexes.map((pokedex) => (
                <Link key={pokedex.name} to={`/pokedex/${pokedex.name}`}>
                    <button>{pokedex.name}</button>
                </Link>
            ))}
        </div>
    );
}

export default PokedexList;