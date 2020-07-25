import React from 'react';
import HomePage from './components/HomePage';
import styled,{ createGlobalStyle } from 'styled-components'

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
  return (
    <>
      <GlobalStyle />
      <HomePage/>
    </>
  );
}

export default App;
