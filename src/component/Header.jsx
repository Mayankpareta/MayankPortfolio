import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

    const [isActive , setIsActive] = useState('home')
    const [menuOpen , setMenuOpen] = useState('false')
    const [activeSection , setActiveSection] = useState('false')

    const navItem = [
        {href: "#home", label: "Home", icon: "home"},
        {href: "#about", label: "About", icon: "about"},
        {href: "#project", label: "Project", icon: "project"},
        {href: "#contact", label: "Contact", icon: "contact"},
    ]
 
 

   
    return (
      <header className="">
      <nav className="bg-gradient-to-r  from-[#1b010c] to-[#060314]  top-0 w-full flex 
      items-center justify-between px-6 md:px-10 lg:px-20 py-4 transition-all duration-300 
      ease-in-out fixed z-50">
       
        {/* nav logo */}
        <div className="flex flex-wrap justify-between items-center  w-32"> 
              <Link to="/" className="flex items-center opacity-100">
                  <img
                      src='/assets/Logo.png'
                      className=" h-16"
                      alt="Logo"
                  />
              </Link>
        </div>

        {/*nav links */}
        <div className='flex'>
            <div className='hidden lg:flex items-center'>
            <ul className='flex space-x-1 lg:space-x-2 mr-6'>
                {navItem.map((item) => (
                    <li key={item.href}>
                        <a 
                        to="about"
                        
                        href={item.href}
                        className={`relative text-base font-medium px-4 py-2 rounded-full transition-all duration-300
                            ${
                              isActive === item.href.replace("#", "") ? 
                              "text-white bg-gradient-to-r from-pink-900 to-indigo-900 dark:from-pink-500 dark:to-indigo-500"
                              : "text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400"
                            }`}
                        >
                            {item.label}
                            {activeSection === item.href.replace("#", "") && (
                            <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-pink-600/20 to-indigo-600/20 dark:from-pink-500/20 dark:to-indigo-500/20"></span>
                  
                            )}

                        </a>
                    </li>
                ))}
            </ul>
            </div>    

            {/* nav resume */}
            <div>
                <a
                href=
                'https://drive.google.com/file/d/1Tfx9vZHf-TUtvHFPcoEwQcUkBK4RQoj7/view?usp=drivesdk'
                target='_blank'
                className='group relative overflow-hidden flex items-center sm:mr-6 px-6 
                py-2.5 bg-gradient-to-r from-pink-600 to-indigo-600 text-white rounded-full
                transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/20'
                >
                    <span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600
                    to-pink-600 transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-left"
                    ></span>
                    <span className='relative'>
                        Resume
                    </span>
                    
                </a>
            </div>
        </div>     
             
          
      </nav>
  </header>
    );
}

