import * as myEv from '../asset/pokeModal.js';


export function renderAllPokemon(pokeData){
    let allPokemonContainer = document.getElementById('pokeContainer'),
        pokeContainer=document.createElement('article'),
        pokeName = document.createElement('h4'),
        pokeNumber = document.createElement('p'),
        pokeImageContainer= document.createElement('picture'),
        pokeImageSource= pokeData.sprites.other.dream_world.front_default,
        pokeTypes = document.createElement('ul'),
        pokeButton = document.createElement('button');
        
        //Set Values        
        pokeName.innerText = pokeData.name;
        pokeNumber.innerText = `#${pokeData.id}`;
        pokeButton.innerHTML = `Skills`;
        //Functions
        getImage(pokeImageSource, pokeImageContainer, pokeData.name);
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
    function getImage(id,container,name){
        let pokeImage = document.createElement('img');
        pokeImage.setAttribute("src", `${id}`)
        pokeImage.setAttribute("alt", `${name}`)
        pokeImage.classList.add('img-container')
        container.appendChild(pokeImage)
        
    }
    function getTypes(types, container){
        types.map(type=>{
            let typeLi = document.createElement('li'),
                typeTag= `${type['type']['name']}`;
            
            typeLi.classList.add("pokemon--text")
            typeLi.style.backgroundColor= getTypeColor(typeTag);
            typeLi.innerHTML= typeTag
            container.appendChild(typeLi)
        })
    }

    function getTypeColor(types){

    
        switch(types){
            case 'grass':
                return '#71C558'
            case 'fire':
                return '#EA7A3C'
            case 'water':
                return '#539AE2'
            case 'psychic':
                return '#E5709B'
            case 'poison':
                return '#B468B7'
            case 'normal':
                return '#AAB09F'
            case 'rock':
                return '#B2A061'
            case 'ice':
                return '#70CBD4'
            case 'steel':
                return '#89A1B0'
            case 'ground':
                return '#CC9F4F'
            case 'ghost':
                return '#846AB6'
            case 'flying':
                return '#7DA6DE'
            case 'fairy':
                return '#E397D1'
            case 'electric':
                return '#E5C531'
            case 'bug':
                return '#94BC4A'
            case 'fighting':
                return '#CB5F48'
            default:
                return 'red'
        }
    }
    // (16) 
