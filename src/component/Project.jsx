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
      liveLink: 'https://leafy-pika-a000ae.netlify.app/',
      image: '/assets/microsoftProject.png',
      alt: 'microsoft',
      id: '1',
      title: 'Microsoft',
      description: 'Developed an interactive, responsive Microsoft-inspired website using HTML, CSS, and JavaScript. The project focuses on creating a functional website with key interactive elements.',
      isImageRight: false
    },
     {
      liveLink: 'https://education-two-jade.vercel.app/',
      image: "/assets/education.png",
      alt: 'educationApp',
      id: '4',
      title: 'Education ',
      description: 'Next.Js , Developing the UI for a Creative Education platform using Next.js , TypeScript and Tailwind CSS. Built dynamic and responsive components such as course, blog, membership, course, calender... ',
      isImageRight: true
    },
    {
      liveLink: 'https://github.com/Mayankpareta/CRUD_Opration',
      image: '/assets/crudOpration.png',
      alt: 'Crud opration',
      id: '2',
      title: 'Todo Crud Operation',
      description: 'React , Implemented token-based login/logout system with JWT and protected routes. Build personal ToDo CRUD features and Forgot Password , Registration functionality.',
      isImageRight: false
    },
    {
      liveLink: 'https://addtocart02.netlify.app/',
      image: '/assets/addToCart.png',
      alt: 'Add To Cart',
      id: '3',
      title: 'Add To Cart',
      description: 'Developed E-commerce "Add to Cart" Feature. The feature allows users to add, remove, and update items in their cart and see the total price , items. Integrated basic product display.' ,
      isImageRight: true
    },
   
  ])


  return (
    <div id='project' className="px-2 md:py-14 py-5 lg:px-5 g-gradient-to-r from-[#222222] to-[#000000] ">
      <h2 className='text-xl text-[#afafaf] sm:text-3xl md:text-4xl text-center text-clip ml-3 md:ml-7 pb-10'>Projects</h2>
        {card.map((item, i) => (          
          
            <Card key={i} liveLink={item.liveLink} isRightImage={item.isImageRight} image={item.image} alt={item.alt} id={item.id} title={item.title} description={item.description}/>
    
        ))}
     
    
    </div>
  );
};

export default Slider;
