import axios from 'axios'

// let nextData = ''
// function capName(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1);
// }
const pokedex = axios.create()
// export const searchPokemon = async (name) => {
//     const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon?${name}`)    
//     return response.data.results
    
// }
export const getKanto = async () => {
    const params = new URLSearchParams({
        offset: '0',
        limit: '151'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getJohto = async () => {
    const params = new URLSearchParams({
        offset: '151',
        limit: '100'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getHoenn = async () => {
    const params = new URLSearchParams({
        offset: '251',
        limit: '135'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getSinnoh = async () => {
    const params = new URLSearchParams({
        offset: '386',
        limit: '107'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getUnova = async () => {
    const params = new URLSearchParams({
        offset: '493',
        limit: '156'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getKalos = async () => {
    const params = new URLSearchParams({
        offset: '649',
        limit: '72'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getAlola = async () => {
    const params = new URLSearchParams({
        offset: '721',
        limit: '88'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getGalar = async () => {
    const params = new URLSearchParams({
        offset: '809',
        limit: '89'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
export const getPaldea = async () => {
    const params = new URLSearchParams({
        offset: '906',
        limit: '119'
    })
    const response = await pokedex.get(`https://pokeapi.co/api/v2/pokemon-species?${params}`)
    return response.data.results
}
// export const getMore = async () => {
//     const response = await pokedex.get(nextData)
// //     return response.data.results
// }
// export const showPokemon = async (entry) => {
//     const pokemon = await pokedex.get(`https://pokeapi.co/api/v2/pokemon/${entry}`)
//     // pokemon.data.name = capName(pokemon.data.name)
//     return {pokemon: pokemon.data}
// }

