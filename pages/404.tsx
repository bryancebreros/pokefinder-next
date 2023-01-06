import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='hero grid place-items-center h-screen'>
        <div className='text-center hero-content'>
          <div className='max-w-lg'>
            <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
            <p className='text-5xl mb-8'>404 - Page Not Found!</p>
            <Link className='btn btn-primary btn-lg' href='/'>
            <Image alt='dancing pokemon' src='/static/ditto.gif' width={50} height={50} className='mr-5'/>
              Back To Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound