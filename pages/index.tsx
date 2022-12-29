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
// export async function getServerSideProps(context) {
  
//     }
const Home = ({pokemon}) => {    
  const {pokemons, loading, dispatch} = useContext(PokedexContext)
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

  export const getStaticProps = async (context) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
      const {results} = await res.json();
      const pokemon = results.map((result, idx) => {
        const paddedIndex = ("00" + (idx + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/csm2/img/pokedex/full/${paddedIndex}.png`;
        return {
          ...result, 
          image
        }
      })
      return {
        props: {pokemon}
      }
    } catch (err) {
      console.error(err);
      

    }
    
  }
