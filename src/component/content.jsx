import Home from './home/Home';
import Skills from '../component/skills/Skills';
import Project from './Project';
import About from './About';
import Contact from './contact/Contact';
import Experience from './experience/Experience';

function Content() {
  return (
    <>
      <Home />
      <Experience />
      <Skills />
      <Project />
      <About />
      <Contact />
    </>
  )
}

export default Content;