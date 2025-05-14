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
      image: '/assets/microsoftProject.png',
      alt: 'microsoft',
      id: '1',
      title: 'Microsoft',
      description: 'Developed an interactive, responsive Microsoft-inspired website using HTML, CSS, and JavaScript. The project focuses on creating a functional website with key interactive elements.'
    },
    {
      link: 'https://github.com/Mayankpareta/analog-clock',
      image: '/assets/clockApp.png',
      alt: 'analog clock',
      id: '2',
      title: 'Analog Clock',
      description: 'Developed a fully functional analog clock using JavaScript to simulate real-time clock behavior. Implemented CSS for styling the clock face and HTML for structuring the layout.'
    },
    {
      link: 'https://github.com/Mayankpareta/Find-GitHub-User-React',
      image: '/assets/github.png',
      alt: 'github',
      id: '3',
      title: 'GitHub',
      description: 'A React-based web application that allows users to search for GitHub profiles by username. The app leverages the GitHub API to fetch user data and display relevant information such as profile picture, repositories, followers, following.'
    },
    {
      link: 'https://github.com/Mayankpareta/weather-app',
      image: "/assets/weatherApp.png",
      alt: 'weatherApp',
      id: '4',
      title: 'Weather App',
      description: 'The Weather App is a responsive web application built with HTML, CSS and javaScript that allows users to check the current weather conditions of any city in real-time. '
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
