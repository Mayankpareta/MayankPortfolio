import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import './home.css';
import TextType from './FrontEndAnimation';
import StarBorder from './startBtnAnimation'

export default function Home() {

  const ref = useRef(null)

  const toggleProject = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })

  }


  return (
    <div>
      <div id='home' className='pt-20 g-gradient-to-r from-[#222222] to-[#000000] '>
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
             px-4 py-[7px] md:py-[2px] bg-gradient-to-r from-gray-600 to-gray-800 text-[#a0a0a0]'>
                  <span className='mr-2 text-sm md:text-xl'>👋</span>Hello, Welcome to my Portfolio
                </h2>

                {/* name and animation */}
                <motion.div
                  initial={{ x: "-20vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <h2
                    className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-3 font-bold'>
                    I'm {" "}
                    <span
                      className='bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
                   text-transparent bg-gradient-to-r from-gray-500 to-gray-200'
                    >
                      Mayank Pareta
                    </span>
                  </h2>

                </motion.div>

                {/* frontend developer */}
                <div className='h-10 '>
                  <TextType
                    text={["Software Engineer", "Laravel  ,  NextJs  ,  ReactJs  ,  Angular"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter=""
                    className='pt-3 md:text-xl text-lg'
                  />
                </div>

                {/* description */}
                <h2 className='md:mt-5 px-7 sm:px-24 lg:px-0 text-base text-gray-400'>I'm a front-end developer with a passion for
                  creating visually stunning and user-friendly websites and leaning fullstack development </h2>

                {/* about me button */}
                <div className='flex justify-center lg:block'>
                  <a
                    href='#about'
                    className='group relative overflow-hidden flex items-center md:mr-6 px-6 py-2.5 w-44 md:w-32 shadow-[inset_1px_2px_6px_2px]  shadow-black/50 border border-[#969696]  rounded-full transition-all duration-300 text-white mt-0 md:mt-6 mb-3 md:mb-0'
                    // className='py-5'
                  >
                    <span className="absolute inset-0 w-full h-full border-b-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  ></span>
                    <span className='text-center w-full'>
                      About me
                    </span>
                  </a>
                </div>
                <div className='w-full md:w-56 flex justify-around md:justify-between md:pt-10 lg:mx-0 mx-auto'>
                  <a href='https://x.com/pareta_m' target='_blank' className='bg-black transition-all duration-300 rounded-full hover:rotate-45 p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                    <FaTwitter />
                  </a>
                  <a href='https://www.linkedin.com/in/mayank-pareta-3b5107206/' target='_blank' className='bg-black transition-all duration-300 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                    <FaLinkedinIn />
                  </a>
                  <a href='https://www.instagram.com/m_k_pareta/' target='_blank' className='bg-black transition-all duration-300 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                    <FaInstagram />
                  </a>
                  <a href='https://www.facebook.com/mayank.pareta.18' target='_blank' className='bg-black transition-all duration-300 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>

            {/* image animation */}
            <div className='border hidden lg:block  border-white p-4 rounded-[20%] h-[25rem] w-[25rem] mt-[30px] ml-[50px]  shadow-black/10'>
              <div className='hero-image'> </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}