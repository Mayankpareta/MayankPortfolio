import React from 'react'


function card({liveLink, isRightImage, image , alt , id , title , description}) {
   

  return (
    <div className='w-11/12 mx-auto rounded-xl px-2 sm:px-5 py-3 sm:py-16 bg-gradient-to-r from-[#000000] to-[#000000] md:mb-10'>
        <div>
          <div className='group  px-4 py-4 rounded-lg'>
              <div className='md:grid grid-cols-2'>                  
                  <div className={`flex justify-center m-auto w-8/12 ${isRightImage ? 'order-last' : 'order-first' } `}>
                    <img
                    className={`duration-700 ease-in-out group-hover:scale-105  ${isRightImage ? 'md:rotate-12' : 'md:-rotate-12' } `}
                    src={image}  
                    alt={alt}/>
                  </div>
                  <div className='px-3 py-3'>                  
                    <h2 className='text-lg  md:text-xl text-center md:text-left xl:text-3xl pb-3'>{title}</h2>
                    <p className='md:text-[15px] text-[12px] text-center md:text-left text-gray-400'>{description}</p>  
                    <div className=' flex justify-center md:justify-start'>
                      <button className='text-sm border border-gray-600 px-4 py-1 mt-2 rounded-md'>
                        <a target='_blank' href={liveLink}>Live URL</a>
                      </button>
                    </div>
                  </div>
              </div>            
          </div>
        </div>    
    </div>
  )
}

export default card