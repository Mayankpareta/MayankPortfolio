import { useEffect, useState } from "react";
import { Heart, ArrowUp } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";


export default function Footer() {
    const [ isShowScroll, setIsShowScroll ] = useState(false)
    const [ scrollNumber, isScrollNumber ] = useState(0)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const scroll = () => isScrollNumber(window.scrollY);
        window.addEventListener("scroll" , scroll);
        scroll();
       return () => window.removeEventListener("scroll", scroll);
    }, []);

    useEffect(() => {
        if(scrollNumber >= 700) {
            setIsShowScroll(true)
        }else {
            setIsShowScroll(false)        
        }   
    }, [scrollNumber])


    return (
        <footer className="relative w-full mt-5 md:mt-14 g-gradient-to-r from-[#222222] to-[#000000] py-5 md:py-12 ">          

            {/* Decorative Elements */}
            {/* <div className="absolute inset-0 overflow-hidden border-t border-gray-800">
                <div className="absolute -top-16 -left-16 w-32 h-32 bg-gray-700 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 right-1/3 w-40 h-40 bg-gray-800 rounded-full blur-xl"></div>
            </div> */}

            {/* Scroll to top button */}
            {isShowScroll && <div className="fixed bottom-6 md:right-10 transform right-0 -translate-x-1/2 z-50">
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center md:w-12 md:h-12 h-10 w-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>
            </div>}

            <div className="max-w-6xl mx-auto px-4 md:px-8 relative ">
                {/* Top section with logo and links */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-10 border-b border-gray-700/50">
                    <div className="flex flex-col mb-8 md:mb-0">
                        <h2 className="text-2xl text-center md:text-left font-bold text-white mb-3">
                            Mayank Pareta
                        </h2>
                        <p className="text-gray-400 max-w-md text-center md:text-left">
                            Creating innovative web solutions with modern
                            technologies and aesthetic designs.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a
                            href="#experience"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Experience
                        </a>    
                        <a
                            href="#project"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Projects
                        </a>    
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            About
                        </a>
                                               
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Bottom section with copyright and social links */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center">
                        <p className="text-gray-400 text-sm md:text-base">
                            © 1999 Mayank Pareta. All rights reserved
                        </p>
                        {/* <span className="inline-flex items-center mx-2 text-gray-400">
                            <span className="mx-1">•</span> Made with
                            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                            in India
                        </span> */}
                    </div>

                    <div className='w-56 flex justify-between lg:mx-0 mx-auto'>
                        <a href='https://x.com/pareta_m' target='_blank' className='bg-black transition-all duration-500 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                            <FaTwitter />
                        </a>
                        <a href='https://www.linkedin.com/in/mayank-pareta-3b5107206/' target='_blank' className='bg-black transition-all duration-500 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                            <FaLinkedinIn />
                        </a>
                        <a href='https://www.instagram.com/m_k_pareta/' target='_blank' className='bg-black transition-all duration-500 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                            <FaInstagram />
                        </a>
                        <a href='https://www.facebook.com/mayank.pareta.18' target='_blank' className='bg-black transition-all duration-500 hover:rotate-45 rounded-full p-2 text-2xl hover:bg-gray-400 hover:text-black'>
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
