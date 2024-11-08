import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/landing/Intro'
import AboutMe from './components/about me/AboutMe'
import MySkills from './components/my skills/MySkills'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="bg-peach">
      <Navbar />
      <Intro />
      <AboutMe />
      <MySkills />
      <Projects />
    </div>
  );
}

export default App;
