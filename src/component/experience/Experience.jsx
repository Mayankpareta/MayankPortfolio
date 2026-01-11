import React from 'react'

const comfygenExpirince = [
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

const wurkbookExpirince = [
 
  {
    title: "1. Hospital Management System Software -",
    description1: 'Wurk in Wurkbook HMS software as a software engineer. This software working in SAAS model.',
    description2: 'HMS Software is use to manage all the activities of hospital like Patient Management , Staff Management , OPD Management , IPD Management , Appointments , Pharmacy , Inventory etc.',
    description3: 'Responsible for developing and maintaining various modules of the HMS software using technologies like Laravel , Bootstrap and SQL Server.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/Mayankpareta/CRUD_Opration',
  },  
  {
    title: "2. Gun House Management Software -",
    description1: 'Wurk in Wurkbook Gunhouse software. Also this software working in SAAS model.',
    description2: 'Gunhouse Software is use to manage all the activities of Gun shop like Customer Management , Staff Management , Sales , Inventory etc.',
    description3: 'Responsible for developing and maintaining various modules of the Gunhouse software using technologies like Laravel , Bootstrap and SQL Server.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/Mayankpareta/CRUD_Opration',
  },
  {
    title: "3. Inventory Management Software -",
    description1: 'Wurk in Wurkbook Inventory software. Also this software working in SAAS model.',
    description2: 'Inventory Software is use to manage all the activities of Inventory like Supplier Management , Product Management , Stock Management , Sales , Purchase , Dead Stock etc.',
    description3: 'Responsible for developing and maintaining various modules of the Inventory software using technologies like Laravel , Bootstrap and SQL Server.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/Mayankpareta/CRUD_Opration',
  },
  {
    title: "3. Taxi Information Website -",
    description1: 'Developed a responsive taxi information website using React.js and Tailwind CSS, providing users with details about various taxi services.',
    description2: 'Implemented dynamic components for service listings, booking forms, and user reviews, enhancing user engagement.',
    description3: 'Optimized website performance and ensured cross-browser compatibility for a seamless user experience.',
    deploy: 'Deploy',
    gitHub: 'GitHub',
    deployLink: 'https://creative-education.vercel.app/',
    gitHubLink: 'https://github.com/Mayankpareta/CRUD_Opration',
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
                  <p className='text-[15px] text-[#b6b6b6] py-4'>June 2025 - August 2025</p>
                  <div className=''>
                    {/* project details */}
                    {comfygenExpirince.map((item, i) => (
                    <div key={i} className='py-2'>
                        <h2 className='sm:text-xl text-md'>{item.title} 
                          {/* <a target='_blank' href={item.deployLink} className='text-blue-500 text-[14px] pl-2'>{item.deploy}</a>
                          <a target='_blank' href={item.gitHubLink} className='text-blue-500 text-[14px] pl-5'>{item.gitHub}</a> */}
                        </h2>
                        {/* description */}
                        <ol className='sm:text-[13px] text-[10px] pl-5 text-[#b6b6b6]'>
                          <li className='py-0.5'>{item.description1}</li>
                          <li className='py-0.5'>{item.description2}</li>
                          <li className='py-0.5'>{item.description3}</li>
                        </ol>
                    </div>
                    ))} 
                  </div>
              </div>
            </div>
            <div className=' rounded-xl mt-4 border border-gray-700 shadow-[inset_2px_0px_10px_rgba(256,256,256,0.5)]'>
              <div className='w-11/12 mx-auto py-14'>
              {/*feild and compeny name */}
                  <h3 className='text-lg sm:text-2xl inline border-b pb-0.5 border-blue-400'>Software Engineer , <span className='text-sm sm:text-lg text-[#d8d8d8]'>Wurkbook Technologies - Kota</span></h3>
                  <p className='text-[15px] text-[#b6b6b6] py-4'>September 2025 - present</p>
                  <div className=''>
                    {/* project details */}
                    {wurkbookExpirince.map((item, i) => (
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