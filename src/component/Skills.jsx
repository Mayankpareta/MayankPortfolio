import React from 'react';
import {  } from 'lucide-react';


function Skills() {

  const FrontEndSkillIcons = [
    {src: "https://skillicons.dev/icons?i=react,theme=dark", alt: "React"},
    {src: "https://skillicons.dev/icons?i=javascript,theme=dark", alt: "Javascript"},
    {src: "https://skillicons.dev/icons?i=html,theme=dark", alt: "Html"},
    {src: "https://skillicons.dev/icons?i=css,theme=dark", alt: "Css"},
    {src: "https://skillicons.dev/icons?i=tailwind,theme=dark", alt: "Tailwind"},
    {src: "https://skillicons.dev/icons?i=bootstrap,theme=dark", alt: "bootstrap"},
  ]

  const BackEndSkillIcons = [
    {src: "https://skillicons.dev/icons?i=nodejs,theme=dark", alt: "NodeJS"},
    {src: "https://skillicons.dev/icons?i=mongodb,theme=dark", alt: "MongoDB"},
    {src: "https://skillicons.dev/icons?i=mysql,theme=dark", alt: "MySQL"},
    {src: "https://skillicons.dev/icons?i=c,theme=dark", alt: "c"},
  ]

  const toolsSkillIcons = [
    {src: "https://skillicons.dev/icons?i=github,theme=dark", alt: "Github"},
    {src: "https://skillicons.dev/icons?i=git,theme=dark", alt: "Git"},
    {src: "https://skillicons.dev/icons?i=vscode,theme=dark", alt: "VScode"},
    {src: "https://skillicons.dev/icons?i=vercel,theme=dark", alt: "Vercel"},
    {src: "https://skillicons.dev/icons?i=figma,theme=dark", alt: "figma"},
  ]

  return (
    <div className='min-h-60 w-full py-10 lg:pt-0 bg-gradient-to-r from-[#1b010c] to-[#060314]'>
        <div className=''>
            <div>
                <h2 className='text-xl sm:text-3xl md:text-4xl text-center text-clip ml-3 md:ml-7'>Teck Stack</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 pt-7 px-2 md:px-10 gap-10 '>

                  {/* Front-End */}
                    <div className='border border-gray-800 text-white min-h-20 rounded-xl px-5 py-3'>
                      <span className='text-sm md:text-lg'>Front-End </span>
                      <ul className='grid grid-cols-6 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-800 '>
                        {FrontEndSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} >
                              <img src={icon.src} alt={icon.alt} className='py-1' />
                            </li>
                          )
                        })}
                        
                      </ul>
                    </div>

                  {/* Back-End */}
                    <div className='border border-gray-800 text-white min-h-20 rounded-xl px-5 py-3'>
                      <span className='text-sm md:text-lg'>Back-End </span>
                      <ul className='grid grid-cols-6 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-800 '>
                        {BackEndSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} >
                              <img src={icon.src} alt={icon.alt} className='py-1' />
                            </li>
                          )
                        })}
                        
                      </ul>
                    </div>

                  {/* Tools */}
                    <div className='border border-gray-800  text-white min-h-20 rounded-xl px-5 py-3'>
                      <span className='text-sm md:text-lg'>Tools </span>
                      <ul className='grid grid-cols-6 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-800 '>
                        {toolsSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} >
                              <img src={icon.src} alt={icon.alt} className='py-1' />
                            </li>
                          )
                        })}
                        
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills