import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { RxCross2 } from "react-icons/rx";
import { IoIosHome } from "react-icons/io";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrCode } from "react-icons/gr";
import { MdFace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Header() {

    const [isActive, setIsActive] = useState("home")
    const [dark, isDark] = useState(true)
    const [isopenMenu, setIsOpenMenu] = useState(false)

    const navItem = [
        { href: "home", label: "Home", icon: "home", logo: <IoIosHome /> },
        { href: "experience", label: "Experience", icon: "experience", logo: <LiaLaptopCodeSolid /> },
        { href: "project", label: "Project", icon: "project", logo: <GrCode /> },
        { href: "about", label: "About", icon: "about", logo: <MdFace /> },
        { href: "contact", label: "Contact", icon: "contact", logo: <FaPhoneAlt /> },
    ]

    const isMobile = useMediaQuery({ maxWidth: 1020});

    const handlechangebg = (id) => {
        setIsActive(id)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } 
        );

        navItem.forEach((item) => {
            const el = document.getElementById(item.href);
            if (el) observer.observe(el);
        });
       
        return () => observer.disconnect();
    }, []);

    const DarkMode = () => {
        isDark(dark === true ? false : true)
    }

    const openMenu = () => {
        setIsOpenMenu(isopenMenu === true ? false : true)
    }
    
   


    return (
        <header className="">
            <nav className="g-gradient-to-r  from-[#222222] to-[#000000] top-0 w-full flex 
            items-center justify-between px-6 md:px-10 lg:px-20 py-2 transition-all duration-300 
            ease-in-out fixed z-50 shadow-[0.5px_0px_12px] shadow-gray-500">

                {/* nav logo */}
                <div className="flex flex-wrap justify-between items-center w-32">
                    <Link to="/" className="flex items-center opacity-100">
                        <img
                            src='/assets/grayLogo.png'
                            className=" h-12"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/*nav links */}
                {isMobile ? (
                    <div>
                        <div className='flex gap-4'>
                            <button
                            onClick={() => DarkMode()}
                            className='flex justify-center items-center text-2xl'>
                            {dark === true ? <MdOutlineDarkMode className='' /> : <MdOutlineWbSunny />}
                            </button>
                            <div
                            onClick={openMenu}
                            >
                                <IoMenu className='text-3xl' />
                            </div>
                        </div>
                        {isopenMenu && (                            
                            <div className='fixed inset-0 z-50 flex '>
                                <div className="bg-black/70 w-full"
                                onClick={() => setIsOpenMenu(false)}></div>
                                <div className='relative top-0 right-0 w-full h-full bg-black text-white p-4 rounded-lg shadow-lg'>
                                    <div onClick={() => setIsOpenMenu(false)} className='flex justify-end text-2xl pb-3'>
                                    <RxCross2 />
                                    </div>
                                    <ul className='flex flex-col gap-2 '>
                                        {navItem.map((item) => (
                                            <li className='px-2 flex py-2 gap-2 mb-3 border border-gray-700  rounded-md' key={item.href}>
                                                <div className='text-lg'>{item.logo}</div>
                                                <a
                                                onClick={() => {handlechangebg(item.href), setIsOpenMenu(false)}}
                                                    href={`#${item.href}`}
                                                    className={` relative text-base font-medium  transition-all duration-300
                                                ${isActive === item.href ?
                                                    ""
                                                    : "text-gray-400 dark:text-gray-100 hover:border-b-2 border-[#ffffff]"
                                                }`}
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                <div className='flex'>
                    <div className='lg:flex items-center'>
                        <ul className='flex mr-6 h-50'>
                            {navItem.map((item) => (
                                <li key={item.href} className={`!h-30 px-4 mx-2 py-1 ${isActive === item.href ?
                                                "text-white border border-[#e7e7e7] rounded-[7px] shadow-[inset_0_1px_10px_rgba(255,255,255,0.7)]  to-white "
                                                : ""
                                            }`}>
                                    <a
                                        // to={`#${item.href}`}
                                        onClick={() => handlechangebg(item.href)}
                                        href={`#${item.href}`}
                                        className={`py-1.5 relative text-base font-medium  transition-all duration-300
                                             ${isActive === item.href ?
                                                ""
                                                : "text-gray-400 dark:text-gray-100 hover:border-b-2 border-[#ffffff]"
                                            }`}
                                    >
                                       
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* nav resume */}
                    <div className='hidden lg:flex'>
                        <a
                        href='https://drive.google.com/file/d/1VFatMXmJ8CwNmXOoQGqJ6diHHPgDxDUb/view?usp=drivesdk'
                        target='_blank'
                        className='group relative overflow-hidden flex items-center sm:mr-6 px-6 py-2.5 shadow-[inset_1px_1px_6px_2px] hover:bg-black hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] shadow-black/50 bg-white text-black rounded-full transition-all duration-300 mr-2 '>
                            {/* <span
                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600
                            to-pink-600 transform scale-x-0 group-hover:scale-x-100
                            transition-transform duration-500 origin-left"
                            ></span> */}
                            <span className='relative'>
                                Resume
                            </span>
                        </a>
                    </div>
                <button
                onClick={() => DarkMode()}
                className='flex justify-center items-center text-2xl'>
                    {dark === true ? <MdOutlineDarkMode className='' /> : <MdOutlineWbSunny />}
                </button>
                </div>                
                )}
            </nav>
        </header>
    );
}


