// Slider.jsx or Slider.tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './projectCard/card';


const Slider = () => {

  const [card , useCard] = useState(
   [
    {
      link: 'https://github.com/Mayankpareta/microsoft-project/tree/main/mainFile',
      image: 'src/public/images/microsoftProject.png',
      alt: 'microsoft',
      id: '1',
      title: 'Microsoft',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/analog-clock',
      image: 'src/public/images/clockApp.png',
      alt: 'analog clock',
      id: '2',
      title: 'Analog Clock',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/github',
      image: 'src/public/images/github.png',
      alt: 'github',
      id: '3',
      title: 'GitHub',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/weather-app',
      image: "src/public/images/weatherApp.png",
      alt: 'weatherApp',
      id: '4',
      title: 'Weather App',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    }
  ])

  

  return (
    <div id='project' className="max-w-full px-2 py-10 lg:px-5 mx-auto bg-gradient-to-r from-[#1b010c] to-[#060314]">
      <h2 className='text-xl sm:text-3xl md:text-4xl text-center text-clip ml-3 md:ml-7'>Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        
      >
        {card.map((item) => (          
          <SwiperSlide
          
          key={item.id}>
            <Card  link={item.link} image={item.image} alt={item.alt} id={item.id} title={item.title} description={item.description}/>
          </SwiperSlide>        
        ))}
     
      </Swiper>
    </div>
  );
};

export default Slider;
