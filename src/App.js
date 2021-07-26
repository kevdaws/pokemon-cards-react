
import { useState, useCallback } from 'react';

function App() {
  
  const [pokemon, updatePokemon] = useState([]);
  const [cards, addCards] = useState([]);
  
  const api_path = "https://api.pokemontcg.io/v1/cards?name="
  
  const changePokemon = useCallback((event) => {
    updatePokemon(event.target.value);
    console.log(event.target.value);
  }, []);
  
  const getPokemonCards = async (event) => {    
      event.preventDefault();
      //console.log();
      const api_url = api_path + pokemon;
      //console.log(api_url);
      const response = await fetch(api_url);
      const resJson = await response.json();
      //console.log(resJson);
      showPokemonCards(resJson);
  };

  const showPokemonCards = useCallback((data) => {
    console.log(data);
    data.cards.forEach(card => {
      addCards(card);
      console.log(card);
    });
  }, []);
  
  return (
    <div>
      <form value={pokemon} onSubmit={getPokemonCards}>
        <label>Search for Pokemon Cards:</label>
        <input id="pokemon" name="pokemon" value={pokemon} onChange={changePokemon}></input>
        <button>Search for Cards</button>
      </form>

      <span>
      {pokemon}
      </span>
    </div>
  
  );
}

export default App;
