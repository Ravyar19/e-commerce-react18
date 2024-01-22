import { GiCandleLight } from 'react-icons/gi';
import { BiSolidUser } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-4'>
      <div className='flex items-center space-x-1  text-xl '>
        <GiCandleLight className='text-3xl bg-green-600 rounded-full  text-white' />
        <h1 className='text-green-600'>Candleleaf</h1>
      </div>
      <div className='hidden sm:flex items-center space-x-10 text-xl'>
        <Link to='/'>Discovery</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact Us</Link>
      </div>
      <div className='hidden sm:flex space-x-5 text-xl'>
        <BiSolidUser />
        <FaShoppingCart />
      </div>

      {/* Mobile */}

      <Sheet>
        <SheetTrigger asChild className='sm:hidden'>
          <CiMenuFries className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent>
          <div className='flex items-center space-x-1  text-xl mt-10 justify-center '>
            <GiCandleLight className='text-3xl bg-green-600 rounded-full  text-white' />
            <h1 className='text-green-600'>Candleleaf</h1>
          </div>
          <div className='mt-10 flex-col flex items-center space-y-8'>
            <SheetClose asChild>
              <Link to='/'>Discovery</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to='/'>About</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to='/'>Contact Us</Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
