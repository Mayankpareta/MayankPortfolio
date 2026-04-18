import Header from "./component/Header.jsx";
import Content from "./component/content";
import Footer from "./component/Footer";
import Particles from './BgAnimation.jsx';
import UserContextProvider from "./contextApi/Provider.jsx";
import { useContext } from "react";
import UserContext from "./contextApi/CreateContext.js";

function Layout({ }) {
    const { theme , setTheme } = useContext(UserContext)

    const particleColors = theme === "dark" ? ['#E8E8E8', '#D3D3D3' , '#202020'] : ['#DBDBDB', '#808080' , '#000']

    return (
        <>
            <div className={`h-[362rem] sm:h-[378rem] lg:h-[380rem]  ${theme == 'light' ? "bg-[#ffffff] text-black" : "bg-black text-white"}`} style={{ width: '100%', position: 'relative' }}>
                <Particles
                    particleColors={particleColors}
                    particleCount={800}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={2000}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className={`absolute inset-0 h-[350rem] sm:h-[378rem] lg:h-[380rem] ${theme == 'light' ? 'text-black' : ' text-white'}`}>
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Layout