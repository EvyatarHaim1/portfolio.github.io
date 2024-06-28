import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Presentations from './components/Presentations';
import Companies from './components/Companies';

function App() {

  const darkmode = useSelector((state) => state.setting.darkmode);
  const { i18n } = useTranslation();
  const lng = navigator.language

  const theme = createTheme({
    palette: {
      primary: indigo,
      type: darkmode ? 'dark' : "light",
    },
    status: {
      danger: 'orange',
    },

  });

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, []);

  const onChangeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" id="app">
        <Header onChangeLang={onChangeLang} />
        <Home />
        <Companies />
        <Services />
        <Presentations />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
