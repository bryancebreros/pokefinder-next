import { useState, useContext, useEffect } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { FaAngleLeft, FaHashtag } from "react-icons/fa";
import Navbar from "../../components/layouts/Navbar"
import Footer from "../../components/layouts/Footer"
import Link from "next/link";
import TestModal from "../../components/layouts/TestModal";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
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
    const colorStat = (baseStat) => {
        if (baseStat < 51){
          return 'progress-warning'
        } else if (baseStat > 50 && baseStat < 100){
          return 'progress-primary'
        } else if (baseStat > 99 && baseStat < 130){
          return 'progress-info'
        } else {
          return 'progress-secondary'
        }
    }
    const sum = singlePokemon.stats?.reduce((acc: number, o) => acc + parseInt(o.base_stat), 0)    
    return(
        <>
            <Head>
                <title>{singlePokemon.name}</title>
            </Head>
            <Navbar />
            <div className='w-full mx-auto xl:w-11/12 md:mb-8'>
                <div className="mb-1">
                    <Link href='/' className='btn btn-ghost xl:bg-none bg-gray-200 m-2 rounded-full '>
                        <FaAngleLeft />
                    </Link>
                </div>

                <div className="grid grid-cols-1 2xl:grid-cols-2 mb-4 gap-8 place-items-center">
                    <div className="card w-96 bg-base-100 md:shadow-xl ">
                        <h2 className="btn btn-square btn-sm rounded-none md:rounded-t-lg  hover:cursor-default flex-1 w-auto "><FaHashtag />{(singlePokemon.id+'').padStart(3,'0')}</h2>
                        <div className="card-body">
                            <h2 className="md:card-title text-3xl card-title capitalize">
                                {singlePokemon.name}
                                <div className={`badge badge-info badge-lg text-white ${singlePokemon.types?.[0].type.name}`}>{singlePokemon.types?.[0].type.name}</div>
                                {singlePokemon.types?.length > 1 &&
                                    <div className={`badge badge-info badge-lg text-white ${singlePokemon.types?.[1].type.name}`}>{singlePokemon.types?.[1].type.name}</div>
                                }
                            </h2>
                            <figure><Image src={singlePokemon.sprites?.other.home.front_default} alt={singlePokemon.name} height={500} width={600}/></figure>
                        
                            
                            <div className='min-w-full rounded-none md:rounded-lg shadow-none md:shadow-md bg-base-100 stats stats-vertical text-center'>
                                {singlePokemon.abilities?.map((a) => (
                                    
                                <label className='stat bg-gray-200 hover:bg-gray-400  ' key={a.ability.name}> 
                                
                                {a.is_hidden ? 
                                    <>
                                    
                                    <div className="stat-title">Hidden Ability</div>
                                    <p className=" flex-grow-0 text-lg stat-value capitalize">{a.ability.name}</p>
                                    
                                    </>
                                :  
                                    <p  className="flex-grow-0 text-lg stat-value capitalize" >{a.ability.name}</p>}
                                    <TestModal ability={a.ability.url}/>
                                </label>
                                
                                ))}
                                
                            
                            </div>
                        </div>
                    </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray">
                    <thead className="bg-slate-800 border-gray-700">
                        <tr>
                            <th className="lg:rounded-tl-lg py-4 px-6 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">BASE STATS</th>
                            <th></th>
                            <th className="lg:w-screen lg:rounded-tr-lg"></th>
                        </tr>
                        
                    </thead>
                    <tbody >
                        <tr className="text-white-900 whitespace-nowrap dark:text-white border-b bg-slate-700 border-white-700">
                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">HP:</th>
                            <td>{singlePokemon.stats?.[0].base_stat}</td>
                            <td className="px-2"><progress className={`progress ${colorStat(singlePokemon.stats?.[0].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[0].base_stat} max="255"></progress></td>
                            
                        </tr>
                        <tr className="text-white-900 whitespace-nowrap dark:text-white border-b bg-slate-700 border-white-700">
                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Attack:</th>
                            <td>{singlePokemon.stats?.[1].base_stat}</td>
                            <td className="px-2"><progress className={`progress ${colorStat(singlePokemon.stats?.[1].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[1].base_stat} max="255"></progress></td>
                            
                        </tr>
                        <tr className="text-white-900 whitespace-nowrap dark:text-white border-b bg-slate-700 border-white-700">
                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Defense:</th>
                            <td>{singlePokemon.stats?.[2].base_stat}</td>
                            <td className="px-2"><progress className={`progress ${colorStat(singlePokemon.stats?.[2].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[2].base_stat} max="255"></progress></td>
                            
                        </tr>
                        <tr className="text-white-900 whitespace-nowrap dark:text-white border-b bg-slate-700 border-white-700">
                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sp. Attack:</th>
                            <td>{singlePokemon.stats?.[3].base_stat}</td>
                            <td className="px-2"><progress className={`progress ${colorStat(singlePokemon.stats?.[3].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[3].base_stat} max="255"></progress></td>
                            
                        </tr>
                        <tr className="text-white-900 whitespace-nowrap dark:text-white border-b bg-slate-700 border-white-700">
                            <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sp. Defense:</th>
                            <td>{singlePokemon.stats?.[4].base_stat}</td>
                            <td className="px-2"><progress className={`progress ${colorStat(singlePokemon.stats?.[4].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[4].base_stat} max="255"></progress></td>
                            
                        </tr>
                        <tr className="bg-slate-700 bg--600 text-white-900 whitespace-nowrap dark:text-white border-white-700 rounded-b-lg">
                            
                            <th className="lg:rounded-bl-lg py-4 px-6 font-medium whitespace-nowrap dark:text-white">Speed:</th>
                            <td >{singlePokemon.stats?.[5].base_stat}</td>
                            <td className="px-2 lg:rounded-br-lg"><progress className={` progress ${colorStat(singlePokemon.stats?.[5].base_stat)} w-20 lg:w-full`} value={singlePokemon.stats?.[5].base_stat} max="255"></progress></td>
                        </tr>
                        </tbody>
                </table>
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