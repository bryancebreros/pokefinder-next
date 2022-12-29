import { useState, useContext, useEffect } from "react";
import { showPokemon } from "../../context/pokedex/PokedexActions";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { FaAngleLeft, FaHashtag } from "react-icons/fa";
import Navbar from "../../components/layouts/Navbar"
import Footer from "../../components/layouts/Footer"
import Link from "next/link";
import { GetServerSideProps } from "next";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
const Pokemon = ({singlePokemon}) => {    
    const { pokemon, loading, dispatch} = useContext(PokedexContext)
    // useEffect(() => {
    //     dispatch({type: 'SET_LOADING'})
    //     const getPokemonData = async() => {
    //       const pokemonData = await showPokemon(entry)
    //       dispatch({type: 'SHOW_POKEMON', payload: pokemonData})
    //     }
    //     getPokemonData()
    //   }, [dispatch, singlePokemon])
    const colorStat = (baseStat) => {
        if (baseStat < 51){
          return 'progress-primary'
        } else if (baseStat > 50 && baseStat < 100){
          return 'progress-warning'
        } else if (baseStat > 99 && baseStat < 130){
          return 'progress-info'
        } else {
          return 'progress-secondary'
        }
    }
    const sum = singlePokemon.stats?.reduce((acc, o) => acc + parseInt(o.base_stat), 0)

    console.log({singlePokemon});
    
    return(
        <>
        <Navbar />
        <div className='w-full mx-auto xl:w-11/12'>
            <div className="mb-1">
                <Link href='/' className='btn btn-ghost xl:bg-none bg-gray-200 ml-2'>
                    <FaAngleLeft />Back
                </Link>
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 mb-8 gap-8 place-items-center">
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <h2 className="btn btn-square btn-sm btn-disabled flex-1 w-auto mb-4"><FaHashtag />{(singlePokemon.id+'').padStart(3,'0')}</h2>
                    <div className="card-body">
                    <h2 className="card-title text-3xl card-title capitalize">
                        {singlePokemon.name}
                        <div className={`badge badge-info badge-lg text-white ${singlePokemon.types?.[0].type.name}`}>{singlePokemon.types?.[0].type.name}</div>
                        {singlePokemon.types?.length > 1 &&
                            <div className={`badge badge-info badge-lg text-white ${singlePokemon.types?.[1].type.name}`}>{singlePokemon.types?.[1].type.name}</div>
                        }
                    </h2>
                    <figure><img src={singlePokemon.sprites?.other.home.front_default} alt={singlePokemon.name} /></figure>
                    
                        
                    <div className='w-full rounded-lg shadow-md bg-base-100 stats stats-vertical text-center'>
                        {singlePokemon.abilities?.map((a) => (
                        <label className='stat bg-gray-200 hover:bg-gray-400 cursor-pointer capitalize' key={a.ability.name}> 
                        {a.is_hidden ? 
                            <>
                            <div className="stat-title">Hidden Ability</div>
                            <p className=" flex-grow-0 text-lg stat-value">{a.ability.name}</p>
                            
                            </>
                        :  
                            <p  className="flex-grow-0 text-lg stat-value">{a.ability.name}</p>}
                        </label>
                        ))}
                    </div>
                    </div>
                

                    {/* <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                    
                    </div> */}
                </div>
            <div className="overflow flex-end">
                <table className="table w-24 lg:w-96">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th className='text-xl'>Base Stats</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                        <th>HP:</th>
                        <td>{singlePokemon.stats?.[0].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[0].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[0].base_stat} max="255"></progress></td>
                        
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                        <th>Attack:</th>
                        <td>{singlePokemon.stats?.[1].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[1].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[1].base_stat} max="255"></progress></td>
                        
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>Defense:</th>
                        <td>{singlePokemon.stats?.[2].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[2].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[2].base_stat} max="255"></progress></td>
                        
                    </tr>
                    <tr>
                        <th>Sp. Attack:</th>
                        <td>{singlePokemon.stats?.[3].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[3].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[3].base_stat} max="255"></progress></td>
                        
                    </tr>
                    <tr>
                        <th>Sp. Defense:</th>
                        <td>{singlePokemon.stats?.[4].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[4].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[4].base_stat} max="255"></progress></td>
                        
                    </tr>
                    <tr>
                        <th>Speed:</th>
                        <td>{singlePokemon.stats?.[5].base_stat}</td>
                        <td><progress className={`progress ${colorStat(singlePokemon.stats?.[5].base_stat)} w-24 lg:w-96`} value={singlePokemon.stats?.[5].base_stat} max="255"></progress></td>
                        
                    </tr>
                    </tbody>
                </table>
                    <div className="stat">
                        <div className="stat-title">Total:</div>
                        <div className="stat-value text-primary">{sum}</div>
                    </div>
                </div>
            </div>
            {/* <div>
            Pokemon
            {formas.map((forma) =>{
                
                return(
                <>
                    <h1>{forma.formName}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${forma.formId}.png`} />
                </>
                )
            })}
            </div> */}
        </div>
        <Footer />
        </>
    )
}
export default Pokemon;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const name = query.pokemonId
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)        
        const singlePokemon = await res.json();
        return {
            props: {
              singlePokemon,
            },
        }
    } catch (err){
        console.error(err)
        return {
            notFound: true,
        }
    }
    
  

    
}