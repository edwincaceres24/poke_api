import API from '../asset/apicall.js';
import * as myPc from '../asset/pokeCard.js';

const   search= document.getElementById('search'),
searchHandler= search.addEventListener('keyup', (e)=> {
    let keyPress= e.key,
    allPokemonContainer = document.getElementById('pokeContainer'),
                valueOfPokemon=search.value.trim().toLowerCase();
            if(keyPress==='Enter'){
                searchPokemonUpdate(valueOfPokemon)
                allPokemonContainer.innerHTML=''
            }
        }),
        errorMessage= function(){
            let messagePrinted= `The pokemon you wrote doesn't exist. Please write another one or click on "Update Content`
            alert(messagePrinted);
            
        },
        searchPokemonUpdate= async function(e){
            let pokeName=e;
            await fetch(`${API}${pokeName}`)
            .then(response=>response.json())
            .then(data=>myPc.renderAllPokemon(data))
            .catch((error) => {
                console.log(error)
                errorMessage()})
        };



