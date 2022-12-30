import { useContext } from "react";
import PokedexContext from "../context/pokedex/PokedexContext";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Intro from "./Intro";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import PokemonItem from '../components/pokemons/PokemonItem';
import PokemonSearch from "../components/pokemons/PokemonSearch";
import { getKanto } from "../context/pokedex/PokedexActions";
// export async function getServerSideProps(context) {
  
//     }
const Home = () => {      
  const {pokemons, loading, dispatch} = useContext(PokedexContext)
  console.log({pokemons});
  
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
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.url} pokemon={pokemon} />
          ))}
        </div>
        <Footer />
        </>
    )
    
}

export default Home;

// GETSTATICPROPS
