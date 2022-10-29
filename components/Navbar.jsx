import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import SidebarMenu from './SidebarMenu';

const Navbar = ({ handleToggle, toggleSidebar, handleSearch }) => {
  return (
    <div className="bg-myellow flex flex-row px-10 pt-5 pb-3">
      <div className='flex flex-row md:flex-1 items-center gap-5'>
        <div>
          {
            toggleSidebar 
            ? <AiOutlineClose size={25} color="#fff" className='cursor-pointer md:invisible visible' onClick={handleToggle}/>
            : <GiHamburgerMenu size={25} color="#fff" className='cursor-pointer md:invisible visible' onClick={handleToggle}/>
          }
        </div>
        <div className="">
          <Link href="/">
            <h1 className="text-white text-3xl font-bold cursor-pointer">Just Meal</h1>
          </Link>
        </div>
      </div>
      <div className="flex-1 self-stretch md:flex justify-center items-end md:visible hidden">
        <Link href='/'>
          <a className="px-5 text-white font-medium cursor-pointer">Home</a>
        </Link>
        {/* <Link href='/search'>
          <a className="px-5 text-white font-medium cursor-pointer">Search</a>
        </Link> */}
        <Link href='/random-meal'>
          <a className="px-5 text-white font-medium cursor-pointer">10 Random Meal</a>
        </Link>
        <Link href='/random-recipe'>
          <a className="px-5 text-white font-medium cursor-pointer">Random Recipe</a>
        </Link>
      </div>
      <div className='flex flex-1 flex-col justify-center items-end'>
          <BiSearchAlt2 size={25} color="#fff" className='cursor-pointer' onClick={handleSearch}/>
      </div>
    </div>
  );
}
 
export default Navbar;