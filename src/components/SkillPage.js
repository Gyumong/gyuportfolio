import React from 'react';
import styled from 'styled-components';
const AllBlock =styled.div`
    background-color:Black;
    h1{color:white;}
    border-top: 2px solid black;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #fff;
`;
const SkillPageBlock = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    height:100%;
    background-color:black;
    color:white;
    @media only screen and (max-width: 768px) {
    display: inherit;
    height: 100%;
    width: 100%;
    text-align: center;
    }
`;
const Title = styled.div`
    padding-top:2rem;
    text-align:center;
    margin-bottom:3rem;
`;
const SkillTitle = styled.div`
    margin-left: 6vw;
    margin-right: 12vw;
    width: 25vw;
    box-sizing: border-box;
    text-align: center;
    align-self: center;
    h3{
    color:white;

    }
    @media only screen and (max-width: 768px) {
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    }
`;
const SkillContent =styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 1rem;
    margin-right: 8vw;
    width: 100%;
    p{
    display: block;
    font-size: 1em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }
    @media only screen and (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    }
`;

function SkillPage() {
    return (
        <AllBlock>
            <Title>
               <h1>Skill</h1> 
            </Title>
        <SkillPageBlock>
            <SkillTitle>
                <h3>
                Front
                </h3>
                <h3>Dev Tools</h3>
                <h3>etc</h3>
            </SkillTitle>
            <SkillContent>
                
                    <p>
                    HTML, CSS, JavaScript, React, Redux, Koa, MongoDB, SPA
                    </p>
                    <p>
                    Git, GitHub
                    </p>
                    <p>
                    TypeScript, Ant Design, Styled-Components
                    </p>
                
            </SkillContent>
        </SkillPageBlock>
        </AllBlock>        
    )
}

export default SkillPage;
