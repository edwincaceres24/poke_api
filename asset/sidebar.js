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
        singleItem.innerHTML = `<input type="checkbox"  name="${e}" value="${e}"><span>${e}</span>`;
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

    inputElement.addEventListener('click', (e)=>console.log(e.target.value))
}
export {renderSideBar,setPokemonTypes};