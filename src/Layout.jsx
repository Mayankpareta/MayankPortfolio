import Header from "./component/Header.jsx";
import Content from "./component/content";
import Footer from "./component/Footer";
import Particles from './BgAnimation.jsx';


function Layout({ }) {

    return (
        <>
            <div style={{ width: '100%', height: '293rem', position: 'relative', backgroundColor: '#000000' }}>
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
            <div className="absolute inset-0">
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Layout