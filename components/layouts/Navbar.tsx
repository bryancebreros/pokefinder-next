import {TbPokeball} from 'react-icons/tb'
import Link from "next/link"

const Navbar = () => {
    return (
      <div className='navbar mb-3 shadow-lg bg-neutral text-neutral-content'>
          <div className="container mx-auto">
              <div className="flex-none px-2 mx-2">
                  
                  <Link href='/' className='text-lg font-bold align-middle'><TbPokeball className='inline pr-2 text-3xl pb-1'/>PokéFinder</Link>
              </div>
              
              <div className="flex-1 px-2 mx-2">
                  <div className="flex justify-end">
                      <Link href='/' className='btn btn-ghost btn-sm rounded-btn'>
                          Home
                      </Link>
                      <Link href='/about' className='btn btn-ghost btn-sm rounded-btn'>
                          About
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
//   Navbar.defaultProps = {
//       title: 'PokéFinder'
//   }
//   Navbar.propTypes = {
//       title: PropTypes.string
//   }
  export default Navbar;