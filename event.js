
export function getAllPokeButton(){
    
    const selectPokeButton = Array.from(document.querySelectorAll('.pokeButton')),
    
    addEventToPokeButton = function(pokeButton){
        pokeButton.addEventListener('click',function(e){
            let pokeButtonVar = e.target.parentElement.querySelector(".pokemon--name").textContent
            console.log(pokeButtonVar)
            alert(`This pokemon is ${pokeButtonVar}`)
        })};
    const asyncVariable =  selectPokeButton.map(addEventToPokeButton)
        return asyncVariable

} 
// export function addEventtoModalsAndPokemonCards {
//     const selectModal = document.querySelector('.poke--modal-background')

//     selectModal.addEventListener()
// }
// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'brnPrepend'){
//           //do something
//      }
//  });