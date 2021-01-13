import React from 'react';
import pokemons from '../data';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {this.props.Pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}