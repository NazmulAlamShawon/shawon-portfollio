import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { CodeIcon } from '@heroicons/react/solid'


const Header = () => {
    return (
        <div className=' flex justify-between bg-emerald-400 md:bg-red-500 lg:bg-emerald-400   md:w-full'>
          <div className="ml-4 p-5 flex justify-center items-center ">
                <span className='mr-1 text-amber-50 hover:text-indigo-500 '> <CodeIcon className='h-5 w-5'> </CodeIcon></span>    
                <span className=''>ShawonWebDev</span>
          </div>
              <ul className='p-5 mr-5  '>
                  <Link  to="/home"> Home</Link>
                  <Link  to="/about"> About</Link>
                  <Link  to="/services"> Services</Link>
                  <Link  to="/contact"> Contact</Link>
              </ul>
             
        </div>
       
    );
};

export default Header;