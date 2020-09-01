import React from 'react';
import styled from 'styled-components';


const HomePageBlock = styled.div`
    width:100%;
    height:100vh;
    h1{
        font-size:4vw;
        font-weight:400;
        text-transform:capitalize;
        white-space:nowrap;
        color:transparent;
        margin:0;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    h1::before{
        content:"안녕하세요 김민규의 포토폴리오입니다.";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        color:#fff;
        overflow:hidden;
        border-right:3px solid white;
        animation:typing 5s steps(40) infinite;
    }
    @keyframes typing{
        0%{
            width:0%;
        }
        50%{
            width: 100%;
        }
        100%{
            width:0%;
        }
    }
`;
function HomePage() {
    return (
      <HomePageBlock >
          <h1>안녕하세요 김민규의 포토폴리오입니다.</h1>
      </HomePageBlock>
    );
  }
  
  export default HomePage;