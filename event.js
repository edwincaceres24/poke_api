
export async function getAllPokeButton(){
    
    const selectPokeButton = Array.from(document.querySelectorAll('.pokeButton')),
    
    addEventToPokeButton = function(pokeButton){
        pokeButton.addEventListener('click',function(e){
            let pokeButtonVar = e
            console.log(pokeButtonVar)
            console.log("Mundo")
        })};
    const asyncVariable = await Promise.resolve('Succed').then(selectPokeButton.map(addEventToPokeButton));
        return asyncVariable

} 

// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'brnPrepend'){
//           //do something
//      }
//  });