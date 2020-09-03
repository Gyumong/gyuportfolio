import React from 'react'
import styled from 'styled-components';

const AboutPageBlock = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    height:100%;
    background-color:white;
    @media only screen and (max-width: 768px) {
    display: inherit;
    height: 100%;
    width: 100%;
    text-align: center;
  }
`;

const AboutTitle = styled.div`
    margin-left: 6vw;
    margin-right: 12vw;
    width: 25vw;
    box-sizing: border-box;
    text-align: center;
    align-self: center;
    h1{
    position: relative;
    display: inline-block;
    font-size: 2em;
    font-weight: 400;
    margin: 30px 0;
    }
    @media only screen and (max-width: 768px) {
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    }
`;
const AboutContent =styled.div`
    margin-bottom: 4rem;
    margin-top: 4rem;
    box-sizing: border-box;
    padding: 1rem;
    margin-right: 8vw;
    width: 100%;
    h1{
    display: block;
    font-size: 2em;
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
function AboutPage() {
    return (
        <AboutPageBlock>
            <AboutTitle>
                <h1>About me</h1>
            </AboutTitle>
            <AboutContent>
                <h1>새로운 기술을 배우는데 두려움이 없는 개발자</h1>
                    <p>
                    어릴때 부터 어려운 수학 문제를 단계별로 풀어가며 마침내 풀리면 그 쾌감이 너무 좋았습니다. 20살 넘어 접한 프로그래밍도 그와 비슷했고 그때부터 개발자를 꿈꾸게 되었습니다. 
                    그 중 React를 접하면서 React의 Component 단위 작성을 통한 생산성과 유지보수을 용이하게 하는 점이 흥미로웠습니다.
                    </p>
                    <p>
                    저는 빠르게 변화하는 기술 들에 흥미를 느끼며 공부하고 있습니다. 최근에는 UX Design에 관심을 두고 있습니다.
                    </p>
            </AboutContent>
        </AboutPageBlock>

    )
}

export default AboutPage
