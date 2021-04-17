
import API from '/asset/apicall.js';

export function eventHandlerForPokeButton(e){
    const selectPokeButton = e.querySelector('.pokeButton'),
        addEventToPokeButton= (pokeButton) =>pokeButton.addEventListener('click', eventClickForPokemon);
        addEventToPokeButton(selectPokeButton)
    
};
function eventClickForPokemon(e){
    const showContainer= document.querySelector('.poke--modal-background'),
          pokeID= e.target.parentElement.querySelector('.pokemon--name').nextSibling.textContent, 
          pokeID_Integer= pokeID.replace(/[^a-zA-Z0-9]/g, '');
          showContainer.style.display="flex";
        //   console.log(`Here is the id ${pokeID_Integer}`)

    renderPokeSkills(pokeID_Integer)

};

function renderPokeSkills(e){
    const addSkillsOfPokemon= function(e){
        let pokeModal= document.querySelector('.poke--modal-container').querySelector('ul'),
            pokeSkill=document.createElement('li');

            pokeSkill.classList.add('poke--modal-skill-item')
            pokeSkill.textContent=e;

            pokeModal.appendChild(pokeSkill)

    }
    fetch(`${API}${e}`)
        .then(data=>data.json())
        .then(data=>(data.moves.slice(0,10)))
        .then(data=> data.map(e=>addSkillsOfPokemon(e.move.name)))
        .catch(err => console.error(err))

}


