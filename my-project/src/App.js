import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/landing/Intro'
import AboutMe from './components/about me/AboutMe'
import MySkills from './components/my skills/MySkills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Conclusion from './components/conclusion/Conclusion'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-peach">
      <Navbar />
      <Intro />
      <AboutMe />
      {/* <MySkills />
      <Projects />
      <Experience />
      <Conclusion />
      <Footer /> */}
    </div>
  );
}

export default App;
