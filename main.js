const   API_URL = "https://pokeapi.co/api/v2/",

        POKEMON_URL = "pokemon/:id",
        opts = { crossDomain: true },
        pokeContainer= document.getElementById("pokeContainer"),
        pokemonCard=()=>document.querySelectorAll(".single--container");
        onPokemonResponse=function(pokemon){
                let pokeVar= new Pokemon(`${pokemon.name}`,`${pokemon.types[0]['type']['name']}`,`${pokemon.id}`)
                pokeVar.createPokemonContainer()
                pokeVar.getImage(`${pokemon.id}`)
                pokeVar.getPokemonInfo()
                pokeVar.pokemonCardFunction()
                pokemonCard()
                // myVar.sayType(`${pokemon.types[0]['type']['name']}`)
            };
const   btn =  document.getElementById("choose-pokemon").innerText,    //document.getElementById("choose-pokemon")
        showPokemon = function(id){
            $.get(`${API_URL}${POKEMON_URL.replace(':id',id)}`,opts,onPokemonResponse)
        },
        sortIdPokemon= () => Math.floor(Math.random()*150);

//Async Function
async function getPokemon(id){
    const response= await fetch(`${API_URL}${POKEMON_URL.replace(':id',id)}`)
    const data = await response.json()
    .then (response =>onPokemonResponse(id) )
}
async function init(id){
    console.log(await getPokemon(id))
}
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
    getPokemonInfo(){
            let newList = document.createElement(`li`);
            newList.classList.add("pokemon--text");
            newList.innerHTML = (`
                                    <ul>Id: <span class="pokemon--name pokemon--id">${this.id}</span></ul>
                                    <ul>Nombre: <span class="pokemon--name">${this.name}</span></ul> 
                                    <ul>Tipo: <span class="pokemon--name">${this.types}</span></ul>`);

            pokeContainer.lastElementChild.append(newList)
        }
    pokemonCardFunction=function(){
            let selectedClass = document.querySelectorAll(".single--container") //Se debe crear un modal dentro de la función constructora
            let alertMessage= (e)=>{
                let valueDesired = e.currentTarget.querySelector(".pokemon--id").innerText
                alert (`Este pokemon tiene un Id de ${valueDesired}`)
            }
            const clickOption = function(value){value.addEventListener("click",alertMessage)}
            Array.from(selectedClass).map(clickOption)
    }
    getImage(num){
        let newImage= document.createElement("picture")
        newImage.innerHTML=`<img src="https://pokeres.bastionbot.org/images/pokemon/${num}.png" class="img-container"/>`;
        pokeContainer.lastElementChild.append(newImage)
    }
}
//Events