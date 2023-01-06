import { useContext } from "react";
import PokedexContext from "../context/pokedex/PokedexContext";
import Head from "next/head";
import Navbar from "../components/layouts/Navbar";
import PokemonItem from '../components/pokemons/PokemonItem';
import PokemonSearch from "../components/pokemons/PokemonSearch";


const Home = () => {      
  const {state} = useContext(PokedexContext)  
  
    return (
        <>
          <Head>
            <title>PokeFinder</title>
            <meta name="description" content="PokeFinder App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <PokemonSearch />
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-7 mx-7'>
            {state.pokemons?.map((pokemon) => (
              <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </>
    )
    
}

export default Home;

// GETSTATICPROPS
