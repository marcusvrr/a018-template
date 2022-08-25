// //Pratica guiada
// //a)
// const listaDeNumeros=[1,2,3,4,5,6,7,8,9,10]
// function funcaoA(array){
//   const triplo=[]
//   for(let valor of array){
//     triplo.push(valor*3)
//   }
//   return triplo
// }
// console.log(funcaoA(listaDeNumeros));
// //b)
// function funcaoB(array) {
//   const soPares = []
//   for(let valor of array){
//     if(valor%2===0){
//       soPares.push(valor)
//     }
//   }
//   return soPares
  
// }
// console.log(funcaoB(listaDeNumeros));
// //c)
// function funcaoC(array,callback) {
//   const resultado = callback(array)
//   console.log("c",resultado);
// }
// funcaoC(listaDeNumeros,funcaoA)
//Pratica Guiada II
const listaDeNumeros=[1,2,3,4,5,6,7,8,9,10]
const returnMap=listaDeNumeros.map((item)=>{return item*3})
console.log("Map",returnMap);
//forma grandona
// const returnMap+listaDeNumeros.map((valor)=>{
//   return valor*3
// })
// console.log(returMap);

//Pratica Guiada III
const returnFilter = listaDeNumeros.filter((item)=>{
  return item%2===0
})
console.log(returnFilter);

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
console.log(pokemons[0]);
//a
function vidapokemons(objeto){
  const pokemon100={...objeto,vida:100}
  return pokemon100
}
console.log(vidapokemons(pokemons[0]));
//b
const pokemonsVidaCheia=pokemons.map((vidapokemons))
console.log(pokemonsVidaCheia);

const pokemonDeFogo = pokemons.filter((pokemon)=>{
  return pokemon.tipo ==='fogo'
})
console.log(pokemonDeFogo);
