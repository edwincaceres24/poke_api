export function renderAllPokemon(pokeData){
    let allPokemonContainer = document.getElementById('pokeContainer'),
        pokeContainer=document.createElement('article'),
        pokeName = document.createElement('h4'),
        pokeNumber = document.createElement('p'),
        pokeTypes = document.createElement('ul'),
        pokeImage = document.createElement('img'),
        pokeButton = document.createElement('button');

        // createTypes(pokeData.types, pokeTypes) 

        //Set Values        
        pokeName.innerText = pokeData.name;
        pokeNumber.innerText = `#${pokeData.id}`;
        pokeImage.setAttribute("src", `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`)
        pokeButton.innerHTML = `Ver más`
        //Set Classes
        pokeContainer.classList.add("single--container");
        pokeName.classList.add("pokemon--name");
        pokeImage.classList.add('img-container')
        pokeButton.classList.add('btn', 'pokeButton')
        //Attachment
        pokeContainer.append(pokeImage,pokeName, pokeNumber, pokeTypes, pokeButton);   

        allPokemonContainer.appendChild(pokeContainer);

};
export  function printTest(){
        console.log('This is from componets file')
    };

// export function renderAllPokemon()
// export function printTest()
