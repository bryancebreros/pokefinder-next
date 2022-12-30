const pokedexReducer = (state, action) => {
    console.log({st: state, ac: action});
    //state.region
    
    switch(action.type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true,
            }
        case 'CLEAR_POKEMONS':
            return{
                ...state,
                pokemons: [],
            }
        case 'SHOW_POKEMON':
            return{
                ...state,
                pokemon: action.payload.pokemon,
                loading: false,

            }
        case 'GET_ABILITIES':
            return{
                ...state,
                abilities: [state.abilities, action.payload],
                loading: false,
            }
        case 'SET_REGION':
            return{
                ...state,
                region: action.payload,
            }
        // case 'GET_FORM':
        //     return{
        //         ...state,
        //         formas: [...state.forms, action.payload],
        //         loading: false,
        //     }
        default:
            return state
    }
}

export default pokedexReducer