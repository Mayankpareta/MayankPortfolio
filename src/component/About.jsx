import React from 'react'

function About() {
  return (
    <div>
        <div id='about' className='bg-gradient-to-r from-[#1b010c] to-[#060314] min-h-52 py-20'>          
            <div className='text-center'>
                <h2 className='text-xl sm:text-2xl pt-4 md:pt-0 text-clip text-[#d15ec6] border-b border-[#e65cd8] inline-block
                 '>About Me</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 py-20'>
              <div className='flex justify-center relative items-center group'>
              
                <img 
                className='w-2/4 md:w-2/4 rounded-xl hover:scale-105 duration-700 ease-in-out'
                src='src/public/images/ownerdown.jpg'
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