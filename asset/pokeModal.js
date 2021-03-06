import API from '../asset/apicall.js';


//Variables

export function eventHandlerForPokeButton(e) {
    const selectPokeButton = e.querySelector('.pokeButton'),
        addEventToPokeButton = (pokeButton) => pokeButton.addEventListener('click', showPokeModal);
    addEventToPokeButton(selectPokeButton)

};

function showPokeModal(e) {
    const showContainer = document.querySelector('.poke--modal-background'),
        pokeID = e.target.parentElement.querySelector('.pokemon--name').nextSibling.textContent,
        pokeID_Integer = pokeID.replace(/[^a-zA-Z0-9]/g, '');
    showContainer.style.display = "flex";
    //   console.log(`Here is the id ${pokeID_Integer}`)

    renderPokeSkills(pokeID_Integer)

};

async function renderPokeSkills(id,name) {
    const addSkillsOfPokemon = function (id) {
        let pokeModal = document.querySelector('.poke--modal-container').querySelector('ul'),
        pokeSkill = document.createElement('li');
        
        pokeSkill.classList.add('poke--modal-skill-item')
        pokeSkill.textContent = id;
        pokeModal.appendChild(pokeSkill)
        
    },
    addPokeName= function(name){
        let pokeName= document.querySelector('.poke--modal-message').querySelector('span');
        pokeName.append(` ${name}`)
        
    }


    await fetch(`${API}${id}`)
        .then(data => data.json())
        .then(data => {
            addPokeName(data.name)
            return data.moves.slice(0, 10)
        })
        .then(data => {
            data.map(e => addSkillsOfPokemon(e.move.name))
        })
        .catch(err => console.error(err))

}

export function renderPokeModal() {
    const modalBackground = document.createElement('section'),
        modalContainer = document.createElement('div'),
        modalMessage = document.createElement('h3'),
        modalListContainer = document.createElement('ul'),
        modalCloseButton = document.createElement('a'),
        modalPokeName = document.createElement('span');

    modalListContainer.classList.add('poke--modal-list-container')
    modalCloseButton.innerText = '+'
    modalCloseButton.classList.add('poke--modal-close-button')

    modalPokeName.classList.add('poke-modal-tag-name')

    modalMessage.innerText = 'Poke skills of'
    modalMessage.appendChild(modalPokeName)
    modalMessage.classList.add('poke--modal-message')

    modalContainer.append(modalCloseButton, modalMessage, modalListContainer)
    modalContainer.classList.add('poke--modal-container')

    modalBackground.appendChild(modalContainer)
    modalBackground.classList.add('poke--modal-background')


    document.body.insertBefore(modalBackground, document.body.firstChild)
    hideModal()
};

export function hideModal() {
    let closedButtonInModal = document.querySelector('.poke--modal-close-button'),
        modalContainer = document.querySelector('.poke--modal-background');

    const closeModal = () => {
        modalContainer.style.display = "none";
        // console.log("Changing style")
        modalContainer.querySelector('ul').innerHTML = "";
        modalContainer.querySelector('.poke--modal-message').querySelector('span').innerHTML = "";
    }

        closedButtonInModal.addEventListener("click", () => closeModal());
        document.body.addEventListener("keydown", (e) => e.key==='Escape'?closeModal():null)
            }
