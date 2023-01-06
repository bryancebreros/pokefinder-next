import React, {createContext, useReducer, useEffect} from 'react'
import pokedexReducer from './PokedexReducer'
import { getKanto } from './PokedexActions'
import {Pokemon} from '../../typings'
import { PokedexActions } from './PokedexReducer'

type initialStateType = {
    pokemons: Pokemon[]
    loading: boolean
    region: number
}
const initialState = {
    pokemons: [],
    loading: false,
    region: 1,
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const PokedexContext = createContext<{state: initialStateType; dispatch: React.Dispatch<PokedexActions>;}>({state: initialState, dispatch: () => null});

export const PokedexProvider = ({children}: props) => {
    
    useEffect(() => {
        console.log({PokedexContext});
        
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
                {state, dispatch}
            }
        >
            {children}
        </PokedexContext.Provider>
    )
}
export default PokedexContext
