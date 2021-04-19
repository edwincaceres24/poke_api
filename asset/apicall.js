import * as myCp from '../asset/pokeCard.js';
import * as myPm from '../asset/pokeModal.js';
import searchHandler from '../asset/search.js';


const API = 'https://pokeapi.co/api/v2/pokemon/', //Define main API
  pokemonArray = [],
  fetchPokemon = async function (pokemon) {
    await fetch(`${API}${pokemon}`)
      .then(response => response.json())
      .then(pokeData => myCp.renderAllPokemon(pokeData))
      .catch(err => console.error(err))
  };
const arrangeArray = function (num) {
  for (let i = 1; i <= num; i++) {
    let randomNumber = Math.floor(Math.random() * num)
    if (randomNumber=== 0 || pokemonArray.includes(randomNumber)){
      continue
    }
    else{
      pokemonArray.push(randomNumber)
    }
  }
};



arrangeArray(100);
pokemonArray.map((e) => fetchPokemon(e));
myPm.renderPokeModal()



export default API; //Exporting variable to another file in JS