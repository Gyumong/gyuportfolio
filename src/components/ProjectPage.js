import React from 'react'
import styled from 'styled-components';
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
function ProjectPage() {

    return (
        <ProjectBlock>
            <ProjectTitle>
                <h1>Project</h1>
            </ProjectTitle>
            <Row>
                    <Col span={6}>
                        dd
                    </Col>
                    <Col span={18}>
                        dd
                    </Col> 
            </Row>
        </ProjectBlock>
    )
}

export default ProjectPage
