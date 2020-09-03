import React from 'react'
import styled from 'styled-components';

const ContactBlock =styled.div`
    height: 50vh;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    h1{
    color:white;
    display: inline-block;
    font-size: 2.4em;
    font-weight: 400;
    margin: 30px 0;
    }
    p{
    color:white;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1.9em;
    font-weight: 500;
    }
`;
const ContactTitle = styled.div`
    text-align:center;
    margin-bottom:2rem;
`;
function ContactPage() {
    return (
        <ContactBlock>
            <ContactTitle>
                <h1>
                    Contact
                </h1>
                <p>
                
                    Email: rlaalsrb3559@naver.com
                </p>
                    </ContactTitle>
        </ContactBlock>
    )
}

export default ContactPage
