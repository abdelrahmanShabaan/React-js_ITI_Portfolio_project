import logo from './logo.svg';
import './App.css';
import HeroSection from './Header/HeroSection';
import AboutMe from './About/AboutMe';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Portfolio />
         <Footer />
    </div>
  );
}

export default App;
