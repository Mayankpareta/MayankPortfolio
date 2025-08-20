import React from 'react';
import { } from 'lucide-react';
import LogoLoop from './LogoAnimation';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiMongodb, SiMysql, SiC, SiGithub, SiGit, SiVsco, SiVercel, SiFigma } from 'react-icons/si';


function Skills() {

  const FrontEndSkillIcons = [
    { src: "https://skillicons.dev/icons?i=next,theme=dark", alt: "next" },
    { src: "https://skillicons.dev/icons?i=react,theme=dark", alt: "React" },
    { src: "https://skillicons.dev/icons?i=javascript,theme=dark", alt: "Javascript" },
    { src: "https://skillicons.dev/icons?i=typescript,theme=dark", alt: "typescript" },
    { src: "https://skillicons.dev/icons?i=html,theme=dark", alt: "Html" },
    { src: "https://skillicons.dev/icons?i=css,theme=dark", alt: "Css" },
    { src: "https://skillicons.dev/icons?i=tailwind,theme=dark", alt: "Tailwind" },
    { src: "https://skillicons.dev/icons?i=bootstrap,theme=dark", alt: "bootstrap" },
  ]

  const BackEndSkillIcons = [
    { src: "https://skillicons.dev/icons?i=nodejs,theme=dark", alt: "NodeJS" },
    { src: "https://skillicons.dev/icons?i=mongodb,theme=dark", alt: "MongoDB" },
    { src: "https://skillicons.dev/icons?i=mysql,theme=dark", alt: "MySQL" },
    { src: "https://skillicons.dev/icons?i=c,theme=dark", alt: "c" },
  ]

  const toolsSkillIcons = [
    { src: "https://skillicons.dev/icons?i=github,theme=dark", alt: "Github" },
    { src: "https://skillicons.dev/icons?i=git,theme=dark", alt: "Git" },
    { src: "https://skillicons.dev/icons?i=vscode,theme=dark", alt: "VScode" },
    { src: "https://skillicons.dev/icons?i=vercel,theme=dark", alt: "Vercel" },
    { src: "https://skillicons.dev/icons?i=figma,theme=dark", alt: "figma" },
  ]

  const techLogos = [
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3.org/html/" },
    { node: <SiCss3 />, title: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  ];

  // Alternative with image sources
  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];

  return (
    <div className='w-full lg:pt-0 g-gradient-to-r from-[#222222] to-[#000000] '>
      <div className=''>
        <div>
          <h2 className='text-xl py-10 text-[#afafaf] sm:text-3xl md:text-4xl text-center text-clip ml-3 md:ml-7'>Teck Stack</h2>
          <div 
          className='flex items-center h-80'
          // className='grid grid-cols-1 md:grid-cols-3 pt-7 px-2 sm:px-4 lg:px-10 lg:gap-10 gap-5 '
          >

            <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={90}
                  direction="left"
                  logoHeight={48}
                  gap={70}                 
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor=""
                  ariaLabel="Technology partners"
                />
            </div>

            {/* Front-End */}
            {/* <div className='border border-gray-700 text-white min-h-20 rounded-xl sm:px-5 px-3 py-3'>
                      <span className='text-sm md:text-lg'>Front-End </span>
                      <ul className='grid grid-cols-4 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-700 '>
                        {FrontEndSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} >
                              <img src={icon.src} alt={icon.alt} className='py-1'/>
                            </li>
                          )
                        })}                        
                      </ul>
                    </div> */}

            {/* Back-End */}
            {/* <div className='border border-gray-800 text-white min-h-20 rounded-xl sm:px-5 px-3 py-3'>
                      <span className='text-sm md:text-lg'>Back-End </span>
                      <ul className='grid grid-cols-4 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-800 '>
                        {BackEndSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} className=''>
                              <img src={icon.src} alt={icon.alt} className='py-1'/>
                            </li>
                          )
                        })}
                        
                      </ul>
                    </div> */}

            {/* Tools */}
            {/* <div className='border border-gray-800  text-white min-h-20 rounded-xl sm:px-5 px-3 py-3'>
                      <span className='text-sm md:text-lg'> Developer / design Tools </span>
                      <ul className='grid grid-cols-4 md:grid-cols-3 gap-2 py-2 md:py-2 border-t border-gray-800 '>
                        {toolsSkillIcons.map((icon) => {
                          return (
                            <li key={icon.src} >
                              <img src={icon.src} alt={icon.alt} className='py-1' />
                            </li>
                          )
                        })}
                        
                      </ul>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills