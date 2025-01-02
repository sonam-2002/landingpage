import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { navitem } from '../../Static'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('null');

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex justify-between mt-2 md:mt-3'>

      <div className='flex space-x-16'>
        <div className='flex gap-5 py-4 md:py-2'>
          <div className='flex'>
            <div className='bg-purple-700 w-10 rounded-full'>
              <div className='bg-white m-1 h-7 w-7 rounded-full'></div>
            </div>
          </div>
          <p className='font-semibold text-xl'>Ed-Circle.</p>
        </div>

        <div className='flex w-80 border border-gray-500 rounded-md m-4 md:m-0'>
          <form action="" className='flex'>
            <CiSearch className='text-gray-500 text-xl m-2' />
            <input
              type="text"
              placeholder='Want to learn?'
              className='py-1 border-none focus:outline-none focus:border-none'
            />
            <select name="" id="dropdown" className="focus:outline-none ">
              <option value="Option 1">Explore</option>
              <option value="Option 2">Python</option>
              <option value="Option 3">Master React</option>
              <option value="Option 4">And more...</option>
            </select>
          </form>
        </div>
      </div>


      <div className='hidden lg:flex items-center space-x-8'>
        {navitem.map((item, index) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>


      <div className='hidden lg:block space-x-4'>
        <button className='py-2 rounded-md px-3'>Sign in</button>
        <button className='bg-purple-700 text-sm font-bold ring-2 ring-purple-300 text-white py-2 rounded-md px-3'>Create free account</button>
      </div>


      <div onClick={toggle} className="md:hidden text-4xl px-2 font-bold hover:bg-gray-200 rounded-full hover:cursor-pointer">
        <GiHamburgerMenu className="mt-4" />
      </div>
    </div>
  )
}

export default Navbar;

