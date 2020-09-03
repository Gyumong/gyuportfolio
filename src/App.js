import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillPage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import Nav from './components/Nav';
import Scroll from 'react-scroll';
import { createGlobalStyle } from 'styled-components'



const GlobalStyle =  createGlobalStyle `
  body{
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
    margin:0;
    box-sizing:border-box;
    background-color:black;
  }
`;
function App() {
  let Element = Scroll.Element;
  return (
    <>
      <GlobalStyle />
      <Nav/>
      <Element name="Home" >
      <HomePage/>
      </Element>
      <Element name="About" >
      <AboutPage/>
      </Element>
      <Element name="Skill" >
      <SkillPage/>
      </Element>
      <Element name="Project" >
      <ProjectPage/>
      </Element>
      <Element name="Contact" >
      <ContactPage/>
      </Element>
      
    </>
  );
}

export default App;
