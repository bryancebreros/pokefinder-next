import Navbar from "../components/layouts/Navbar"
const About = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='text-2xl mb-4 sm:text-6xl'>PokéFinder</h1>
                    <p className='mb-4 text-2xl font-light'>
                        A Next.js app to search Pokémon from all generations and see their info.                
                    </p>
                    <p className="text-3xl mb-4">
                        Data retrieved from <strong><a href='https://pokeapi.co/' target="_blank" rel="noopener noreferrer">PokéAPI</a></strong>!

                    </p>
                <p className='text-lg text-gray-400'>
                    Version <span className='text-black'>1.0.0</span>
                </p>
                <p className="text-lg text-gray-400">
                        GitHub: <strong className="text-black"><a href='https://github.com/bryancebreros' target="_blank" rel="noopener noreferrer">bryancebreros</a></strong>

                </p>
                
            </div>
            
        </>
    )
}
  
export default About