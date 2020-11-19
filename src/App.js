import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Header />
       
        <Switch>
            <Route path="/resume">
                <Resume />
            </Route>

            <Route path="/about_me">
                 <AboutMe />
            </Route>

            <Route path="/projects">
                 <Projects />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/">
                 <Home />
           </Route>

        </Switch>
{/*         
        <Footer /> */}
     </Router>
    </div>
  );
}

export default App;
