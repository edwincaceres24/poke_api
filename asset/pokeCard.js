import * as myEv from '/asset/pokeModal.js';


export function renderAllPokemon(pokeData){
    let allPokemonContainer = document.getElementById('pokeContainer'),
        pokeContainer=document.createElement('article'),
        pokeName = document.createElement('h4'),
        pokeNumber = document.createElement('p'),
        pokeImageContainer= document.createElement('picture'),
        pokeTypes = document.createElement('ul'),
        pokeButton = document.createElement('button');
        
        
        //Set Values        
        pokeName.innerText = pokeData.name;
        pokeNumber.innerText = `#${pokeData.id}`;
        pokeButton.innerHTML = `Ver más`;
        //Functions
        getImage(pokeData.id, pokeImageContainer);
        getTypes(pokeData.types, pokeTypes) 
        //Set Classes
        pokeContainer.classList.add("single--container");
        pokeName.classList.add("pokemon--name");
        pokeButton.classList.add('btn', 'pokeButton')
        //Attachment
        pokeContainer.append(pokeImageContainer,pokeName, pokeNumber, pokeTypes, pokeButton);   
        
        allPokemonContainer.appendChild(pokeContainer);
        myEv.eventHandlerForPokeButton(pokeContainer); //We pass an event handler as a function of the iterative processs

        return getMoves(pokeData)  // We are returning the values of skills
        
    };
    function getMoves(data) {
        let allMoves= data.moves;
        return allMoves.map(e=>e.move.name)
    }
    function getImage(id,container){
        let pokeImage = document.createElement('img');
        pokeImage.setAttribute("src", `https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
        pokeImage.classList.add('img-container')
        container.appendChild(pokeImage)
        
    }
    function getTypes(types, container){
        types.map(type=>{
            let typeLi = document.createElement('li')
            typeLi.classList.add("pokemon--text")
            typeLi.innerHTML=`${type['type']['name']}`
            container.appendChild(typeLi)
        })
    }
