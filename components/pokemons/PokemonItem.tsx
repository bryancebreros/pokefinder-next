import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

interface PokemonItemProps {
  pokemon: {
    name: string
    url: string
  }
};

interface PokeResponse {
  id: number,
  name: string
};
const PokemonItem = ({pokemon: {name, url}}: PokemonItemProps) => {    
  const [poke, setPoke] = useState<PokeResponse>()
  useEffect(() => {
    axios.get(url).then((res) => {
      setPoke(res.data)
    })
    // eslint-disable-next-line
  }, [])
  const entry = poke?.id;
  
  const icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry}.png`;
  
  return (
      <Link href={`/pokemon/${poke?.name}`}>
          <div className='card card-side bg-base-100 shadow-xl  group hover:bg-yellow-400'>
              <div className="card-bodyp-6 max-w-sm mx-auto  flex items-center space-x-6">
                  <h2 className="card-title capitalize">{name}</h2>
                  <figure className='w-24 '>
                    {entry == undefined ? null : <Image src={icon} alt={name} className='group-hover:-translate-y-2' height={68} width={68}/>}
                  </figure>
              </div>
          </div>
      </Link>
  );

};


export default PokemonItem;