
import styled, { ThemeProvider } from 'styled-components'
import  { darkTheme }  from "./utils/Themes.js";
import Hero from './components/HeroSection/index.js';
import Skills from './components/Skills/index.js';
import Navbar from './components/Navbar/index.js';
import Education from './components/Education/index.js';
import {HashRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/index.js';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <div>
    <ThemeProvider theme={ darkTheme }>
      <HashRouter>
    <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <br></br>
          <Experience />
          <br></br>
          <br></br>
          <br></br>
          </Wrapper>
          <br></br>
        <Projects />
        <Wrapper>

          <Education />
          <Contact></Contact>
        </Wrapper>
        <Wrapper>
         <Footer />
        </Wrapper>
        
      </Body>
      </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
