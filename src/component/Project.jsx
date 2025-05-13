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
      image: 'src\images\microsoftProject.png',
      alt: 'microsoft',
      id: '1',
      title: 'Microsoft',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/analog-clock',
      image: 'src\images\microsoftProject.png',
      alt: 'analog clock',
      id: '1',
      title: 'Analog Clock',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/github',
      image: 'src\images\microsoftProject.png',
      alt: 'github',
      id: '1',
      title: 'GitHub',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    },
    {
      link: 'https://github.com/Mayankpareta/weather-app',
      image: 'src\images\microsoftProject.png',
      alt: 'weatherApp',
      id: '1',
      title: 'Weather App',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'
    }
  ])


  

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-[#1b010c] to-[#060314]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Card  card={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card  card={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card  card={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <Card  card={card}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
