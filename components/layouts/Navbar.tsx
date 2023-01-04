import {TbPokeball} from 'react-icons/tb'
import Link from "next/link"

const Navbar = () => {
    return (
      <nav className='mb-2 p-4 shadow-lg bg-neutral text-neutral-content'>
          <div className=" flex flex-wrap place-items-left justify-between mx-auto">
              <div className=" px-2 mx-2">
                  
                  <Link href='/' className='text-lg font-bold align-middle'><TbPokeball className='inline pr-2 text-3xl pb-1'/>PokéFinder</Link>
              </div>
              
              <div className="flex-1 px-2 mx-2 hidden md:inline">
                  <div className="flex justify-end">
                      <Link href='/about' className='btn btn-ghost btn-sm rounded-btn'>
                          About
                      </Link>
                  </div>
              </div>
          </div>
      </nav>
    )
}

export default Navbar;