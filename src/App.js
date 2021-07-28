import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <Home />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
