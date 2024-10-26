import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/landing/Intro'
import AboutMe from './components/about me/AboutMe'

function App() {
  return (
    <div className="bg-peach">
      <Navbar />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
