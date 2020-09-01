import React from 'react'
import styled from 'styled-components';
import weather from './assets/weather.png';
import {Row,Col} from 'antd';

const ProjectBlock =styled.div`
    background-color:white;
    border-top: 2px solid black;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #fff;
`;

const ProjectTitle = styled.div`
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
const HeaderImage = styled.div`
    width:100%;
    height:360px;
    background-repeat:no-repeat;
    background-position:center,center;
    background-image: url(${weather});
    background-size:cover;
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
                        <div> dd</div>
                    </Col> 
            </Row>
                </Contain>
        </ProjectBlock>
    )
}

export default ProjectPage
