import React from 'react'


function card({link , image , alt , id , title , description}) {
   

  return (
    <div className='w-9/12 mx-auto border border-white/50 shadow-[inset_0px_1px_18px] shadow-white/40 rounded-xl px-2 sm:px-5 py-3 sm:py-12 bg-gradient-to-r from-[#000000] to-[#000000] mb-10'>
        <div>
          <div className='group border border-gray-800 px-4 py-4 rounded-lg'>
              <a key={id} href={link} target='_blank' >                  
                  <div className='flex justify-center'>
                    <img
                    className='duration-700 ease-in-out group-hover:scale-105'
                    src={image}  
                    alt={alt}/>
                  </div>
                  <div className='px-3 py-3'>                  
                    <h2 className='text-base md:text-xl xl:text-2xl'>{title}</h2>
                    <p className='text-[12px] text-gray-400'>{description}</p>  
                  </div>
              </a>            
          </div>
        </div>    
    </div>
  )
}

export default card