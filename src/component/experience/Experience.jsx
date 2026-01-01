import React from 'react'

const ExperienceProject = [
  {
    title: "1. CRUD Operations -",
    description1: 'Implemented token-based login/logout system with JWT and protected routes.',
    description2: 'Developed the frontend of a secure Todo app using React.js, Tailwind CSS, and Axios. Built personal Todo CRUD features, allowing users to manage their own tasks securely.',
    description3: 'Integrated Axios API calls with Authorization headers for authenticated requests. Managed responsive UI design and real-time state updates with React hooks.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/Mayankpareta/CRUD_Opration',
  },
  {
    title: "2. Comfygen -",
    description1: 'Contributed to the official website of Comfygen Pvt Ltd by building and integrating new frontend Dynamic components using Next.js and Tailwind CSS',
    description2: 'Designed responsive, reusable UI components for improved scalability and maintenance.',
    description3: 'Collaborated with designers and senior developers to implement company-specific UI/UX standards.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/yourusername/creative-education',
  },
  {
    title: "3. Creative Education -",
    description1: 'Developing the UI for a Creative Education platform using Next.js , TypeScript and Tailwind CSS.',
    description2: 'Built dynamic and responsive components such as course, blog, membership, and course calender search couse meeting.',
    description3: 'Ensured SEO-friendly and optimized frontend performance using Next.js features',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/yourusername/creative-education',
  },
]

function Experience() {
  return (
    <div id='experience' className='min-h-60 w-full md:py-10 pt-5 lg:pt-0 g-gradient-to-r from-[#222222] to-[#000000]'>
        <div className='w-[90%] mx-auto'>
            {/* title */}
            <h3 className='text-center text-xl sm:text-4xl md:py-10 text-[#afafaf]'>Experience</h3>
            <div className=' rounded-xl mt-4 border border-gray-700 shadow-[inset_2px_0px_10px_rgba(256,256,256,0.5)]'>
              <div className='w-11/12 mx-auto py-14'>
              {/*feild and compeny name */}
                  <h3 className='text-lg sm:text-2xl inline border-b pb-0.5 border-blue-400'>Frontend Developer Intern , <span className='text-sm sm:text-lg text-[#d8d8d8]'>Comfygen pvt ltd  - Jaipur</span></h3>
                  <p className='text-[15px] text-[#b6b6b6] py-4'>March 2025 - present</p>
                  <div className=''>
                    {/* project details */}
                    {ExperienceProject.map((item, i) => (
                    <div key={i} className='py-2'>
                        <h2 className='sm:text-xl text-md'>{item.title} 
                          {/* <a target='_blank' href={item.deployLink} className='text-blue-500 text-[14px] pl-2'>{item.deploy}</a>
                          <a target='_blank' href={item.gitHubLink} className='text-blue-500 text-[14px] pl-5'>{item.gitHub}</a> */}
                        </h2>
                        {/* description */}
                        <ul className='sm:text-[13px] text-[10px] pl-5 text-[#b6b6b6]'>
                          <li className='py-0.5'>{item.description1}</li>
                          <li className='py-0.5'>{item.description2}</li>
                          <li className='py-0.5'>{item.description3}</li>
                        </ul>
                    </div>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience