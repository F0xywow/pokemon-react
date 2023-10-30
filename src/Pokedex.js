// Pokedex.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pokedex() {
  const { pokedexName } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexName}`);
      const data = await response.json();
      setPokemon(data.pokemon_entries);
    };

    fetchPokemon();
  }, [pokedexName]);

  return (
    <div>
      {pokemon.map((entry) => (
        <div key={entry.entry_number}>
          <h2>{entry.pokemon_species.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Pokedex;