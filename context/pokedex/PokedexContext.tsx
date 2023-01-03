import {createContext, useReducer, useEffect} from 'react'
import pokedexReducer from './PokedexReducer'
import { getKanto } from './PokedexActions'

type PokedexContextProviderProps = {
    children: React.ReactNode;
};

export const PokedexContext = createContext(getKanto);


export const PokedexProvider = ({children}: PokedexContextProviderProps) => {
    const initialState = {
        pokemons: [],
        // pokemon:{},
        // abilities: [],
        loading: false,
        region: 1,

    }
    console.log('hii');
    
    useEffect(() => {
        const getPokemon = async () => {
          dispatch({type: 'SET_LOADING'})
          const pokemons = await getKanto()
          dispatch({type: 'GET_POKEMONS', payload: pokemons})
        }
        getPokemon()
    }, [])
    
    const [state, dispatch] = useReducer(pokedexReducer, initialState)
    return (
        <PokedexContext.Provider
            value={
                {...state, 
                dispatch}
            }
        >
            {children}
        </PokedexContext.Provider>
    )
}
export default PokedexContext
