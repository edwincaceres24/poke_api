import * as myCp from '/asset/components.js';
import * as myEv from '/asset/event.js';

const API = 'https://pokeapi.co/api/v2/pokemon/', //Define main API
  myArray = [],
  fetchPokemon = async function (pokemon) {
    let url = pokemon.url
    await fetch(`${API}${pokemon}`)
      .then(response => response.json())
      .then(pokeData => myCp.renderAllPokemon(pokeData))
      // .then(data => console.log(data.slice(0,9))) //Here you need to add de parametre
      .catch(err => console.error(err))
  };
const getPokemon = async function (number) { //Not using for the moment
  await fetch(API + limit + number)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.results.map(pokemon => {
        fetchPokemon(pokemon)
      })
    })
    .catch(err => console.error(err))
}

const arrangeArray = function (num) {
  for (let i = 1; i <= num; i++) {
    let myVar = Math.floor(Math.random() * 150)
    myArray.push(myVar)
  }
};



arrangeArray(15);
myArray.map((e) => fetchPokemon(e));
myCp.renderPokeModal()


export default API; //Exporting variable to another file in JS