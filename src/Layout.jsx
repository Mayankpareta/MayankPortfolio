import Header from "./component/Header.jsx";
import Content from "./component/content";
import Footer from "./component/Footer";
import Particles from './BgAnimation.jsx';


function Layout({ }) {

    return (
        <>
            <div className="h-[352rem] md:h-[388rem]" style={{ width: '100%', position: 'relative', backgroundColor: '#000000' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={800}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={180}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="absolute inset-0 h-[350rem] md:h-[388rem]">
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Layout