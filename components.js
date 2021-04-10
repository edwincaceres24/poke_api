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
        
    };
    
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
export  function printTest(){
        console.log('This is from componets file')
    };

// export function renderAllPokemon()
// export function printTest()
