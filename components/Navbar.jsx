import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import SidebarMenu from './SidebarMenu';

const Navbar = ({ handleToggle, toggleSidebar }) => {
  return (
    <div className="bg-myellow flex flex-row px-10 pt-5 pb-3">
      <div className='flex flex-row flex-none w-72  items-center gap-5'>
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
        <Link href='/search'>
          <a className="px-5 text-white font-medium cursor-pointer">Search</a>
        </Link>
        <Link href='/random-meal'>
          <a className="px-5 text-white font-medium cursor-pointer">Random Meal</a>
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;