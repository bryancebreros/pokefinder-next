import React, {useState, useContext} from 'react'
import PokedexContext from '../../context/pokedex/PokedexContext'
import {getKanto, getJohto, getHoenn, getSinnoh, getUnova, getKalos, getAlola, getGalar} from '../../context/pokedex/PokedexActions'
import { useRouter } from 'next/router'
const PokemonSearch = () => {
    const router = useRouter();
    const [text, setText] = useState('')
    const {pokemons, region, dispatch}  = useContext(PokedexContext)
    
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === ''){
            router.push('')
        }else{
            {text ==='deoxys'?  router.push(`/pokemon/deoxys-normal`):  router.push(`/pokemon/${text.toLowerCase()}`)}   
        }
    }
    const handleKanto = async () => {
        dispatch({type: 'SET_REGION', payload: 1})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getKanto()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleJohto = async () => {
        // setActive(2)
        dispatch({type: 'SET_REGION', payload: 2})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getJohto()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleHoenn = async () => {
        dispatch({type: 'SET_REGION', payload: 3})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getHoenn()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleSinnoh = async () => {
        dispatch({type: 'SET_REGION', payload: 4})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getSinnoh()
        
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleUnova = async () => {
        dispatch({type: 'SET_REGION', payload: 5})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getUnova()
        
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleKalos = async () => {
        dispatch({type: 'SET_REGION', payload: 6})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getKalos()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleAlola = async () => {
        dispatch({type: 'SET_REGION', payload: 7})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        dispatch({type: 'SET_REGION'})
        const pokemons = await getAlola()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleGalar = async () => {
        dispatch({type: 'SET_REGION', payload: 8})
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getGalar()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
  return (
    <div className=" grid lg:grid-cols-2 place-items-center  w-full mb-3">
        <div className='p-2 lg:w-auto '>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input value={text} onChange={handleChange} placeholder="Search by name" type="text" className="w-full pr-40 lg:pr-96 bg-gray-100 input input-lg text-black" />
                        
                            <button className="absolute top-0 right-0 rounded-l-none w-28 btn btn-lg">
                                Go!
                            </button>
                        
                    </div>
                </div>
            </form>
        </div>
        <div className='dropdown dropdown-bottom'>
            <label tabIndex={0} className="btn m-1">Select Region</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                
                <li className='p-1'>
                        <button id='1' onClick={handleKanto} type="submit" className={`btn btn-ghost btn-lg ${region === 1 && 'btn-active'}`}>
                            Kanto
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='2' onClick={handleJohto} type="submit" className={`btn btn-ghost btn-lg ${region === 2&& 'btn-active'}`}>
                            Johto
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='3' onClick={handleHoenn} type="submit" className={`btn btn-ghost btn-lg ${region === 3 && 'btn-active'}`}>
                            Hoenn
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='4' onClick={handleSinnoh} type="submit" className={`btn btn-ghost btn-lg ${region === 4 && 'btn-active'}`}>
                            Sinnoh
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='5' onClick={handleUnova} type="submit" className={`btn btn-ghost btn-lg ${region === 5 && 'btn-active'}`}>
                            Unova
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='6' onClick={handleKalos} type="submit" className={`btn btn-ghost btn-lg ${region === 6 && 'btn-active'}`}>
                            Kalos
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='7' onClick={handleAlola} type="submit" className={`btn btn-ghost btn-lg ${region === 7 && 'btn-active'}`}>
                            Alola
                        </button>
                    </li>
                    <li className='p-1'>
                        <button id='8' onClick={handleGalar} type="submit" className={`btn btn-ghost btn-lg ${region === 8 && 'btn-active'}`}>
                            Galar
                        </button>
                    </li>
            </ul>
        </div>
    </div>
    // <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            
    //         <div className='grid grid-cols-1 gap-8 xl:grid-cols-8 lg:grid-cols-3 md:grid-cols-2'>
    //             {/* {appState.objects.map((element, idx) => {
    //                 <div
    //                     key={idx}
    //                     className={toggleActiveStyles(idx)}
    //                     onClick={()=> {
    //                         toggleActive(idx)
    //                     }}
    //                 >
    //                     <button id='1' onClick={handleKanto} type="submit" className="btn btn-ghost btn-lg">
    //                     I
    //                     </button>
    //                 </div> */}
    //             {/* })} */}
                
    //         </div>
    // </div>
    

  )
}

export default PokemonSearch