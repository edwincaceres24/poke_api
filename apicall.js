// let fetchData = require('/Users/administrador/Desktop/DEV/Platzi/asincronismo_js/src/utils/fetchData'); //Can't use Require on Js without node
import * as myFn from './components.js';
import * as myEv from './event.js';

const API = 'https://pokeapi.co/api/v2/pokemon/',     //Define main API
  API_Limit = 'https://pokeapi.co/api/v2/pokemon?',
  updatePokemon= document.getElementById("choose-pokemon"),
  API_Location = 'https://pokeapi.co/api/v2/location/',
  limit = 'limit=',                
  fetchPokemon = async function (pokemon) {
    let url = pokemon.url
    await fetch(API + pokemon)
      .then(response => response.json())
      .then( (pokeData) => {
        myFn.renderAllPokemon(pokeData)
        console.log(pokeData)
      })
      .catch(err => console.error(err))
    };
    const getPokemon = async function (number) {      //Not using for the moment
      await fetch(API + limit + number)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.results.map(pokemon => {fetchPokemon(pokemon)})
      })
      .then( function() { printMessageAtTheEnd()})   
      //We stablish a set timeout that triggers the function after the callback of the API has finished, it isn't 100% accurate because of client could have a really low connection
      .catch(err => console.error(err))
    },
    printMessageAtTheEnd = function(){
      setTimeout( ()=>{
        console.log("All events were added succesfully") 
        myEv.getAllPokeButton()
        myFn.renderPokeModal()
      },2700)};
    
    // setValue(150) 

const arrangeArray = function(num){
  for (let i=1;i<=num;i++){
          let myVar = Math.floor(Math.random()*150)  
	  myArray.push(myVar)
    }
  printMessageAtTheEnd()
  };

  
  const myArray=[];
  
  arrangeArray(15);
  
  console.log(myArray);
  
  myArray.map((e)=>fetchPokemon(e));
  
  // updatePokemon.addEventListener("click", ()=>{ arrangeArray(15)} )