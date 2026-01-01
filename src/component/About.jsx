import React from 'react'
import { useMediaQuery } from 'react-responsive'

function About() {

  const isMobile = useMediaQuery({ maxWidth : 1020})

  return (
    <div>
        <div id='about'  className='g-gradient-to-r from-[#222222] to-[#000000] min-h-52 lg:py-20 py-5'>          
            <div className='text-center '>
                <h2 className='text-xl text-[#afafaf] sm:text-4xl pt-4 md:pt-0 text-clip inline-block
                 '>About Me</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-20 py-5 md:py-10 lg:py-20'>
               <div
               className='flex justify-center relative mx-auto items-center group border rounded-xl bg-white w-64 sm:w-[350px] sm:p-4 p-2 shadow-[inset_0px_0px_10px] shadow-black/70'>               
                    <img 
                    className='border-2 border-white shadow-2xl shadow-black rounded-xl hover:scale-105 duration-700 ease-in-out'
                    src={isMobile ? '/assets/owner1.png' : '/assets/ownerdown.jpg'}
                    alt='Owner Image' />
              </div>
              
              <div className='px-5'>
                <h3 className='text-lg sm:text-xl md:text-2xl pb-3'>
                  Front-End Developer 
                </h3>
                <p
                className='text-gray-400 py-2'
                >Hey there! I'm <b className='text-white'> Mayank Pareta </b>, a passionate front-end developer with a deep love for web development and creating digital experiences that make an impact.
                </p>

                <p
                className='text-gray-400 py-2' >
                  My journey into the world of programming began with curiosity, which quickly evolved into a passion for building solutions that solve real-world problems. I'm proficient in HTML, CSS, and JavaScript, with expertise in modern frameworks like React.js and Node.js.
                </p>
                
                <p
                className='text-gray-400 py-2' >
                  I believe in continuous learning and staying up-to-date with the latest technologies. When I'm not coding, you can find me exploring new tech trends, or enhancing my skills.
                </p>
                
              </div>
           </div> 
        </div>
    </div>
  )
}

export default About