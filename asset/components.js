import * as myEv from '/asset/event.js';
import * as myFnt from '/asset/function.js';

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
export  function renderPokeModal(){
        const modalBackground = document.createElement('section'),
                modalContainer = document.createElement('div'),
                modalMessage = document.createElement('h3'),
                modalListContainer = document.createElement('ul'),
                modalCloseButton = document.createElement('a');

        modalListContainer.classList.add('poke--modal-list-container')
        modalCloseButton.innerText='+'
        modalCloseButton.classList.add('poke--modal-close-button')

        modalMessage.innerText='Pokemon skill:'
        modalMessage.classList.add('poke--modal-message')

        modalContainer.append(modalCloseButton, modalMessage,modalListContainer)
        modalContainer.classList.add('poke--modal-container')

        modalBackground.appendChild(modalContainer)
        modalBackground.classList.add('poke--modal-background')
        

        document.body.insertBefore(modalBackground, document.body.firstChild)
        hideModal()
    };

export function hideModal(){
    let closedButtonInModal= document.querySelector('.poke--modal-close-button'),
        modalContainer=document.querySelector('.poke--modal-background');
    closedButtonInModal.addEventListener("click",  ()=>closeModal());

    const closeModal = ()=>{
        modalContainer.style.display="none";
        // console.log("Changing style")
        modalContainer.querySelector('ul').innerHTML="";
    }
}

    // When you open the popup, change the css overflow property to hidden like
    
    // $('body').css('overflow','hidden')
    // When you close it, change back to normal
    
    // $('body').css('overflow','auto')