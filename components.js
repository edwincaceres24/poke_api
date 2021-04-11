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
export  function renderPokeModal(){
        const modalBackground = document.createElement('section'),
                modalContainer = document.createElement('div'),
                modalMessage = document.createElement('h3'),
                modalCloseButton = document.createElement('a');


        modalCloseButton.innerText='+'
        modalCloseButton.classList.add('poke--modal-close-button')

        modalMessage.innerText='Me quiero comer a Nathalie'
        modalMessage.classList.add('poke--modal-message')

        modalContainer.append(modalCloseButton, modalMessage)
        modalContainer.classList.add('poke--modal-container')

        modalBackground.appendChild(modalContainer)
        modalBackground.classList.add('poke--modal-background')
        

        document.body.insertBefore(modalBackground, document.body.firstChild)

    };


    // When you open the popup, change the css overflow property to hidden like
    
    // $('body').css('overflow','hidden')
    // When you close it, change back to normal
    
    // $('body').css('overflow','auto')