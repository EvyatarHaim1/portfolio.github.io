import './App.css';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const darkmode = useSelector((state) => state.setting.darkmode);

  const theme = createTheme({
    palette: {
      primary: indigo,
      type: darkmode ? 'dark' : "light",
    },
    status: {
      danger: 'orange',
    },

  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App" id="app">
        <Header />
        <Home />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
