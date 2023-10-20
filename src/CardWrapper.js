import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardWrapper.css';

function CardWrapper({ searchTerm }) {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();

      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const details = await response.json();
          return { ...pokemon, image: details.sprites.front_default, imageShiny: details.sprites.front_shiny };
        })
      );

      setPokemonDetails(details);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="card-wrapper">
      {pokemonDetails
        .filter((pokemon) => pokemon.name.includes(searchTerm)) // Filter the pokemonDetails array
        .map((pokemon, index) => (
          <Card key={index} name={pokemon.name} number={index + 1} image={pokemon.image} imageShiny={pokemon.imageShiny} />
        ))}
    </div>
  );
}

export default CardWrapper;