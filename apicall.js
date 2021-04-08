// let fetchData = require('/Users/administrador/Desktop/DEV/Platzi/asincronismo_js/src/utils/fetchData');
import * as myFn from './components.js';

const API = 'https://pokeapi.co/api/v2/pokemon?',
      limit= 'limit=',
      fetchPokemon= function(pokemon){
        let url = pokemon.url
          fetch(url)
          .then(response=>response.json())
          .then(function(pokeData){
              myFn.renderAllPokemon(pokeData)
                    console.log(pokeData)
      })};
const getPokemon =  function(number){
  fetch(API + limit + number)
    .then(response=>response.json())
    .then(data=>{console.log(data)
        data.results.map(pokemon=>fetchPokemon(pokemon)) ///Print all pokemon Name
    })
    // .then()
  // .then(()=>{
  //     console.log(`${API}${number}`)
  //     return(`${API}${number}`.name)
  // })
  // .then(data=>{
  //     fetchPokemon(data)
  // })
  .catch(err => console.error(err))
},
  setValue=function(value){typeof(value)=="number"? getPokemon(value) : alert("Please write down a number")};

setValue(parseInt(prompt("Coloca un número del 1 al 150:")))

myFn.printTest()
// const arrangeArray = function(num){
//   for (let i=1;i<=num;i++){
//           let myVar = Math.floor(Math.random()*150)  
// 	  myArray.push(myVar)
//     }};

// const myArray=[];
 
// arrangeArray(15);

// console.log(myArray);

//  myArray.forEach((e)=>getPokemon(e));
