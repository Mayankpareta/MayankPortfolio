import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode , MdOutlineWbSunny} from "react-icons/md";


export default function Header() {

    const [isActive , setIsActive] = useState(0)
    const [dark , isDark ] = useState(true)

    const navItem = [
        {href: "#home", label: "Home", icon: "home"},
        {href: "#experience", label: "Experience", icon: "experience"},
        {href: "#project", label: "Project", icon: "project"},
        {href: "#about", label: "About", icon: "about"},
        {href: "#contact", label: "Contact", icon: "contact"},
    ]
 
    const handlechangebg = (idx) => {
        setIsActive(idx === isActive ? isActive : idx)
    }

    const DarkMode = () => {
        isDark(dark === true ? false : true)
    }

   
    return (
      <header className="">
      <nav className="g-gradient-to-r  from-[#222222] to-[#000000] top-0 w-full flex 
      items-center justify-between px-6 md:px-10 lg:px-20 py-2 transition-all duration-300 
      ease-in-out fixed z-50 shadow-[0.5px_0px_12px] shadow-gray-600">
       
        {/* nav logo */}
        <div className="flex flex-wrap justify-between items-center w-32"> 
              <Link to="/" className="flex items-center opacity-100">
                  <img
                      src='/assets/grayLogo.png'
                      className=" h-12"
                      alt="Logo"
                  />
              </Link>
        </div>

        {/*nav links */}
        <div className='flex'>
            <div className='hidden lg:flex items-center'>
            <ul className='flex space-x-1 lg:space-x-2 mr-6'>
                {navItem.map((item, idx) => (
                    <li key={idx}>
                        <a 
                        to="about"
                        onClick={() => handlechangebg(idx)}
                        href={item.href}
                        className={`relative text-base font-medium px-4 py-1.5 rounded-full transition-all duration-300
                            ${
                              isActive === idx ? 
                              "text-white bg-gradient-to-r from-gray-500 to-gray-800 "
                              : "text-gray-400 dark:text-gray-100 hover:text-white/70 "
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>    

            {/* nav resume */}
            <div>
                <a
                href=
                'https://drive.google.com/file/d/1VFatMXmJ8CwNmXOoQGqJ6diHHPgDxDUb/view?usp=drivesdk'
                target='_blank'
                className='group relative overflow-hidden flex items-center sm:mr-6 px-6 
                py-2.5 shadow-[inset_1px_1px_6px_2px] hover:bg-slate-200 shadow-black/50 bg-white text-black rounded-full
                transition-all duration-300'
                >
                    {/* <span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600
                    to-pink-600 transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left"
                    ></span> */}
                    <span className='relative'>
                        Resume
                    </span>                    
                </a>
            </div>
            <button 
            onClick={() => DarkMode()}
            className='flex justify-center items-center text-2xl'>
              {dark === true ? <MdOutlineDarkMode className=''/> : <MdOutlineWbSunny/> }
            </button>
        </div>               
      </nav>
  </header>
    );
}

