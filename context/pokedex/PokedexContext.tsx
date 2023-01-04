import {createContext, useReducer, useEffect} from 'react'
import pokedexReducer from './PokedexReducer'
import { getKanto } from './PokedexActions'
import typings from '../../typings'

type PokedexContextProviderProps = {
    children: React.ReactNode
    region: number 
    dispatch: ({}) => void 
    pokemons: typings.Pokemon[]
};

export const PokedexContext = createContext<PokedexContextProviderProps>({} as PokedexContextProviderProps);


export const PokedexProvider = ({children}: PokedexContextProviderProps) => {
    const initialState = {
        pokemons: [],
        loading: false,
        region: 1,

    }
    
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
