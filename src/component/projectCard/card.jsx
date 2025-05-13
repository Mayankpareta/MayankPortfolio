import React from 'react'


function card({link , image , alt , id , title , description}) {
   
     


  return (
    <div className='px-12 sm:px-12 lg:px-12 py-12 bg-gradient-to-r from-[#1b010c] to-[#060314]'>
        <div>
        <div className='group border border-gray-800 px-4 py-4 rounded-lg'>
                                       
                <a 
                key={id}
                href={link}
                target='_blank'
                >
                  
                <div className='flex justify-center'>
                  <img
                  className=' duration-700 ease-in-out group-hover:scale-105'
                  src={image}  alt={alt}/>
                </div>
                <div className='px-3 py-3'>
                  
                  <h2 className='text-base md:text-xl xl:text-2xl'>{title}</h2>
                  <p className='text-xs text-gray-400'>{description}</p>
  
                </div>
                </a>
            
            </div>
        </div>    
    </div>
  )
}

export default card