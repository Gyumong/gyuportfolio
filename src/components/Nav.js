import React from 'react'
import styled from 'styled-components';
import Scroll from 'react-scroll';

let Link = Scroll.Link;


const NavBlock= styled.div`
    display:flex;
    position: fixed;
    width: 100%;
    z-index:1000;
    opacity: 0.6;
    &:hover{
        display:flex;
    }
    &:active{
        display:flex;
    }
    @media only screen and (max-width: 768px) {
        display:none;
    }
`;
const TextBar= styled.div`
    display: block;
    background: rgba(0,0,0,.6);
    height: 64px;
    width: 100%;
    
    ul{
        display:flex;
        justify-content:center;
        list-style: none;
        margin: 0;
        padding:0;
    }
    li{ 
        margin-right: 3rem;
        display: list-item;
        padding: 1.5rem;
        border: 0;
        cursor: pointer;
        opacity: 0.6;
        &:hover{
            opacity:1;
        }
    }
    a{
        color:#fff;
        font-size:16px;
        &:hover{
            opacity:1;
        }
    }
    li:last-child{
        margin:0;
    }
`;

 function handleSetActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.add('active');
  }
function Nav() {
    return (
        <NavBlock>
            <TextBar>
                <ul>
                    <li id="first-item">
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
                        Home
                    </Link>  
                    </li>
                    <li>
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
                        About    
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active" to="Skill" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
                        Skill    
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active" to="Project" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
                        Project    
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                        Contact
                    </Link>
                    </li>
                </ul>
            </TextBar>
        </NavBlock>
    )
}
export default Nav
