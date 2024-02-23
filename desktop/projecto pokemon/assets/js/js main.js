

const offset=0
const limit=10
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertpokemonToLi(pokemon){

}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getpokemons().then((pokemons)=>{
    for (let i=0; i < pokemons.length; i++){
        const pokemon = pokemon[i];
        pokemonList.innerHTML += convertpokemonToLi(pokemon)
    })

