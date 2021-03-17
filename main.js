const   API_URL = "https://pokeapi.co/api/v2/",
        POKEMON_URL = "pokemon/:id",
        opts = { crossDomain: true },
        pokeContainer= $('#pokeContainer'),
        pokemonCard=()=>document.querySelectorAll(".single--container");

        onPokemonResponse=function(pokemon){

                let myVar= new Pokemon(`${pokemon.name}`,`${pokemon.types[0]['type']['name']}`)
                myVar.createPokemonContainer()
                myVar.getImage(`${pokemon.id}`)
                myVar.sayHi()
                myVar.pokemonCardFunction()
                pokemonCard()
                // myVar.sayType(`${pokemon.types[0]['type']['name']}`)
            };


const   btn =  $("#choose-pokemon")[0].innerText,    //document.getElementById("choose-pokemon")
        showPokemon = function(id){
            $.get(`${API_URL}${POKEMON_URL.replace(':id',id)}`,opts,onPokemonResponse)
        },
        sortIdPokemon= () => Math.floor(Math.random()*150);

//Class

class Pokemon{
    constructor(name,types,id){ //The third sprit element has the default image
        (this.name=name),
        (this.types=types),
        (this.id=id)}
    
    createPokemonContainer(){
        let newContainer= document.createElement("article")
        newContainer.classList.add("single--container")
        pokeContainer.append(newContainer)
    }
    sayHi(){
            let newList = document.createElement(`li`);

            newList.classList.add("pokemon--text");
            newList.innerHTML = (`<ul>Nombre: <span class="pokemon--name">${this.name}</span></ul> 
                                      <ul>Tipo: <span class="pokemon--name">${this.types}</span></ul>`);
            pokeContainer[0].lastElementChild.append(newList)
        }
    pokemonCardFunction=function(){
            let myVar = document.querySelectorAll(".single--container")
            let alertMessage= ()=>alert(`Èste pokemon es de tipo ${this.types}`)
            const clickOption = function(value){value.addEventListener("click",alertMessage)}
            Array.from(myVar).map(clickOption)
    }
    
    getImage(num){
        let newImage= document.createElement("picture")
        newImage.innerHTML=`<img src="https://pokeres.bastionbot.org/images/pokemon/${num}.png" class="img-container"/>`;
        pokeContainer[0].lastElementChild.append(newImage)
    }
}

//Events
    








