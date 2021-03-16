const   API_URL = "https://pokeapi.co/api/v2/",
        POKEMON_URL = "pokemon/:id",
        opts = { crossDomain: true },
        pokeContainer= $('#pokeContainer'); 
        onPokemonResponse=function(pokemon){

                let myVar= new Pokemon(`${pokemon.name}`,`${pokemon.types[0]['type']['name']}`)
                myVar.sayHi()
                myVar.sayType(`${pokemon.types[0]['type']['name']}`)
                // console.log(`Hola, soy el pokemon ${pokemon.name}`,
                //     mi experiencia es de ${pokemon.base_experience}`)
                //console.table(`${pokemon.name}`)
            };


const   btn =  $("#choose-pokemon")[0].innerText,    //document.getElementById("choose-pokemon")
        showPokemon = function(id){
            $.get(`${API_URL}${POKEMON_URL.replace(':id',id)}`,opts,onPokemonResponse)
        },
        sortIdPokemon= () => Math.floor(Math.random()*150);

//Class

class Pokemon{
    constructor(name,types){ //The third sprit element has the default image
        (this.name=name),
        (this.types=types)}

    sayHi(){
            let newParagraph = document.createElement(`p`);
            newParagraph.classList.add("pokemon--text");
            newParagraph.innerHTML = (`Hola, soy el pokemon <span class="pokemon--name">${this.name}</span> y soy del tipo ${this.types}`);
            pokeContainer.append(newParagraph)
        }
    sayType(types){
            let newParagraph = document.createElement("p");
            newParagraph.classList.add("pokemon--text");
            newParagraph.innerHTML= (`Soy del tipo <span class="pokemon--name">${types}</span>`);
            pokeContainer.append(newParagraph)
    }

}

//New Elementes






