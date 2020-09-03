import React from 'react'
import styled from 'styled-components';
import weather from './assets/weather.png';
import GyuMoive from './assets/GyuMoive.png';
import {Row,Col} from 'antd';

const ProjectBlock =styled.div`
    background-color:white;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #fff;
`;

const ProjectTitle = styled.div`
    padding-top:3rem;
    text-align:center;
    margin-bottom:3rem;
`;

const Contain = styled.div`
    height: 360px;
    width: 100%;
    max-width: 80vw;
    border-radius: 4px;
    margin: 0 auto 30px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 3px 6px rgba(0,0,0,.2);

    @media only screen and (max-width: 768px) {
    max-width: 100%;
    height: 50%;
    display: flex;
    flex-direction:column;
    }
`;
const Box =styled.div`
    border-right:1px solid black;
    width: 100%;
    height: 360px;
    margin-right: 2rem;
    @media only screen and (max-width: 768px) {
        border:none;
    }
`;

const Info =styled.div`
    
    width:100%;
    height:360px;
    font-size:1.3em;
    h1{
        margin:1rem 0 1rem 2rem;
        font-weight:700;
    }
    h2{
        margin:1rem 0 1rem 2rem;
        font-weight:400;
    }
    p{
        margin:1rem 0 1rem 2rem;
        
    }
    ul{
        list-style:none;
       
        padding:0;
        
    }
    li{
        display: inline-block;
        cursor:pointer;
        margin:1rem 0 1rem 1rem;
    }
    li:first-child{
        margin:0 0 0 2rem;
    }
    @media only screen and (max-width: 768px) {
        font-size:10px;
        p{
            margin:1rem 0 1rem 2rem;
            text-align: left;
        }
        li{
            margin:0 0 1rem 1rem;
        }
        li:first-child{
            margin-top:1rem;
        }
    }
`;
const HeaderImage = styled.div`
    width:100%;
    height:360px;
    background-repeat:no-repeat;
    background-position:center,center;
    background-image: url(${weather});
    background-size:cover;
`;

const MovieImage = styled.div`
    width:100%;
    height:360px;
    background-repeat:no-repeat;
    background-position:center,center;
    background-image: url(${GyuMoive});
    background-size:contain;
`;

function ProjectPage() {

    return (
        <ProjectBlock>
            <ProjectTitle>
                <h1>Project</h1>
            </ProjectTitle>
                <Contain>
            <Row>

                    <Col md={6} xs={24}>
                    <Box>
                        <HeaderImage />
              
                    </Box>
                    </Col>
                    <Col md={18} xs={24}>
                    <Info>

                        <h1>WhatWeather</h1>
                        <h2>
                            개발기간 : 2020.08.20~2020.08.25
                        </h2>
                        <p>
                            React,KakaoMap,Openweather API를 이용해 주소 검색시 그 주소에 따른 날씨를 나타내주는 앱입니다.
                        </p>
                        <ul>
                            <li>#React</li>
                            <li>#Axios</li>
                            <li>#style-components</li>
                            <li>#Antd</li>
                        </ul>
                    </Info>
                    </Col> 
            </Row>
                </Contain>
                <Contain>
                    <Row>
                    <Col md={6} xs={24}>
                    <Box>
                        <MovieImage />
              
                    </Box>
                    </Col>
                    <Col md={18} xs={24}>
                    <Info>

                        <h1>GyuMovie</h1>
                        <h2>
                            개발기간 : 2020.07.20~2020.07.25
                        </h2>
                        <p>
                                TheMovie API를 이용해 영화정보를 보여주는 앱입니다.
                            <br/>
                            Koa,MongoDB를 사용해로그인,회원가입 jwt로 회원인증시스템을 구현해 주었습니다.
                        </p>
                        <ul>
                            <li>#React</li>
                            <li>#Redux</li>
                            <li>#React-router</li>
                            <li>#Koa</li>
                            <li>#Mongoose</li>
                            <li>#jwt</li>
                            <li>#style-components</li>
                            <li>#material-ui</li>
                        </ul>
                    </Info>
                    </Col> 
                    </Row>
                </Contain>
        </ProjectBlock>
    )
}

export default ProjectPage
