// let fetchData = require('/Users/administrador/Desktop/DEV/Platzi/asincronismo_js/src/utils/fetchData');
import * as myFn from './components.js';
import * as myEv from './event.js';

const API = 'https://pokeapi.co/api/v2/pokemon?',
  API_Location = 'https://pokeapi.co/api/v2/location/',
  limit = 'limit=',
  mainFetchFunction = function(){
    
  },
  fetchPokemon = async function (pokemon) {
    let url = pokemon.url
    await fetch(url)
      .then(response => response.json())
      .then(function (pokeData) {
        myFn.renderAllPokemon(pokeData)
        console.log(pokeData)
      })
      // .then(()=>console.log(`Finished with ${pokemon.name}`))
      .catch(err => console.error(err))
    };
    const getPokemon = async function (number) {
      await fetch(API + limit + number)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.results.map(pokemon => {fetchPokemon(pokemon)})
      })
      .then(()=>printMessageAtTheEnd())
      .then( function() { myEv.getAllPokeButton()})
      .catch(err => console.error(err))
      // await Promise.resolve(console.log("LoadingFinished"))
    },
    setValue = function (value) {
      typeof (value) == "number" ? getPokemon(value): alert("Please write down a number")
    },
    printMessageAtTheEnd = async function(){
      let myVar = await Promise.resolve('Succedd').then(console.log('This must be printed after the call to the API'))
      return myVar

    };
    
    setValue(parseInt(prompt("Coloca un número del 1 al 150:")))
    

// const arrangeArray = function(num){
//   for (let i=1;i<=num;i++){
//           let myVar = Math.floor(Math.random()*150)  
// 	  myArray.push(myVar)
//     }};

// const myArray=[];

// arrangeArray(15);

// console.log(myArray);

//  myArray.forEach((e)=>getPokemon(e));
