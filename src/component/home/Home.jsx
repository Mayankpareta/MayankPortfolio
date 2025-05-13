import React, { useRef } from 'react';
import { motion } from 'motion/react';
import {Code } from 'lucide-react'

import './home.css';

export default function Home() {
  
  const ref = useRef(null)
  
  const toggleProject = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  
  }

  
    return (
    <div>
    <div className='pt-20 bg-gradient-to-r from-[#1b010c] to-[#060314] '>
      {/*decorative elements*/}
      
       <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2 }}
        >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 lg:mx-32  md:pt-10'>
            <div >
            <div className="text-center lg:text-left min-h-48 lg:min-h-[500px] my-3 mt-7" >

          {/* welcom portfolio */}
          
          
            <h2 className='inline-block text-xs sm:text-sm lg:text-sm h-9 rounded-lg  
             px-4 py-[7px] md:py-[2px] bg-gradient-to-r from-[#3a0535] to-[#110542] text-[#8688fa]'>
             <span className='mr-2 text-sm md:text-xl'>👋</span>Hello, Welcome to my Portfolio
            </h2>
         
          {/* name and animation */}
          <motion.div
            initial= {{x: "-20vw"}}
            animate= {{x: 0}}
            transition={{type: "spring", stiffness: 50}}
          >
                <h2 
                className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-3 font-bold'>
                   I'm {" "}
                   <span 
                   className=' bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
                   text-transparent bg-gradient-to-r from-pink-700 to-indigo-700'
                    >
                      Mayank Pareta
                      </span>  
                    </h2>
            
          </motion.div>

          {/* frontend developer */}
              <h2 className='md:mt-5 mt-2 text-xl text-blue-100'>Front-End Web Developer </h2>

          {/* description */}    
              <h2 className='md:mt-5 px-7 sm:px-24 lg:px-0 text-base text-gray-400'>I'm a front-end developer with a passion for
                 creating visually stunning and user-friendly websites and leaning fullstack development </h2>
               
          {/* about me button */}
          <div className='flex justify-center lg:block'>
          <a
                href=
                '#about'                
                className='group relative overflow-hidden flex items-center mr-6 px-6 py-2.5 
                md:w-32 text-white rounded-lg transition-all duration-300 shadow-md 
                hover:shadow-lg border border-gray-600 mt-6'
                >
                  <span
                  className="absolute inset-0 w-full h-full bg-gray-600
                   transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left"
                  ></span>
                  <span className='relative'>
                      About me
                  </span>                    
                </a>
                </div>
          </div>

          </div>

          {/* image animation */}
              <div className='hero-image hidden lg:block'> </div>
         
        </div>
          
          
        </motion.div>
    </div>   
  </div>   
    );
}