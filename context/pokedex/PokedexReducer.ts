import typings, {Pokemon} from "../../typings"

export type PokedexActions = 
    | {type: 'GET_POKEMONS' , payload: Pokemon[]}
    | {type: 'SET_LOADING'}
    | {type: 'CLEAR_POKEMONS'}
    | {type: 'SET_REGION' , payload: number}

const pokedexReducer = (state: typings.State, action: typings.Action) => {
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