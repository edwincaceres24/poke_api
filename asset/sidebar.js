import API from '../asset/apicall.js';

const renderSideBar =  async function () {

    const pokemonCardContainer = document.getElementById('pokeContainer'),
        sidebarContainer = document.createElement('aside'),
        sideBarTitle = document.createElement('h2'),
        sideBarOptionContainer = document.createElement('ul'),
        testArray = ["fire", "psychic", "rock", "ground", "bug", "poison", "water", "grass", "fairy", "ghost", "normal", "fighting", "flying", "electric", "ice", "steel"];

    sidebarContainer.classList.add('sidebar--main-container')
    sideBarTitle.classList.add('informative-text')
    sideBarTitle.innerHTML='Select your type'
    sideBarOptionContainer.classList.add('sidebar--list-container')


    pokemonCardContainer.parentNode.insertBefore(sidebarContainer,pokemonCardContainer)
    renderOptionsInSideBar(testArray, sideBarOptionContainer)
    sidebarContainer.append(sideBarTitle,sideBarOptionContainer)

    setTimeout( ()=>setPokemonTypes(API),0) 
}
const renderOptionsInSideBar = function (list,container) {
    
    list.map((e) => {
        let singleItem = document.createElement('li');
        
        singleItem.classList.add('side--bar-listitem')
        // console.log(e);
        singleItem.innerHTML = `<input type="checkbox"  name="${e}" value="${e}" ><span>${e}</span>`;
        handlerForCheckbox(singleItem)
        container.appendChild(singleItem)
    })
}

const setPokemonTypes = async function (API) {
    await fetch(`${API}1`)
    .then((response) => response.json() )
    .then((data) => console.log(data.moves) )
    .catch((error) => console.error(error))
}

const handlerForCheckbox = function(element){
    let inputElement = element.querySelector('input')

    inputElement.addEventListener('click', ()=>filterPokemonCards())
}

const filterPokemonCards= function(){
    let 
        allPokeTypes = Array.from(document.querySelectorAll('.pokemon--text')),
        allPokeCards= Array.from(document.querySelectorAll('.single--container')),
        allCheckboxInSideBar = Array.from(document.querySelector('.sidebar--main-container').querySelectorAll('input'));
        
        let allinputsMarked = allCheckboxInSideBar.filter(e=>e.checked===true), //This show the checkboks that were marked
            allInputElementValue = allinputsMarked.map(e=>e.value), //Show values
            filteredPokeCards = allPokeTypes.filter(e=>allInputElementValue.includes(e.textContent));
        
        if(allinputsMarked.length===0){
            allPokeCards.map(e=>e.style.display='block')
            
        }else{
            allPokeCards.map(e=>e.style.display='none')
            filteredPokeCards.map(e=>e.parentElement.parentElement.style.display='block');
            console.log(filteredPokeCards)
        }
        

}
export {renderSideBar,setPokemonTypes};