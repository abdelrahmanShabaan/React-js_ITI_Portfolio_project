import logo from './logo.svg';
import './App.css';
import HeroSection from './Header/HeroSection';
import AboutMe from './About/AboutMe';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
        <HeroSection />
        <AboutMe />
        <Skills />
    </div>
  );
}

export default App;
