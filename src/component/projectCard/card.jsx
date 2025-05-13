import React from 'react'

function card(card) {
   
    


  return (
    <div className='px-4 md:px-16 py-12 bg-gradient-to-r from-[#1b010c] to-[#060314]'>
        <div>
        <div className='group border border-gray-800 px-4 py-4 rounded-lg'>
            {card.card.map((item) => {
              
              <a
              href={item.link}
              target='_blank'
              >
                
              <div className='flex justify-center'>
                <img
                className=' duration-700 ease-in-out group-hover:scale-105'
                src={item.imag}e alt={item.alt}/>
              </div>
              <div className='px-3 py-3'>
                
                <h2 className='text-base md:text-xl xl:text-2xl'>{item.title}</h2>
                <p className='text-xs text-gray-400'>{item.description}</p>

              </div>
              </a>
            })}
            </div>
        </div>    
    </div>
  )
}

export default card