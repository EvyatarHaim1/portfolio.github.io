import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <Div>
            <h1>Full Stack Web Developer</h1>
                  <p>............................................</p>
                  <h4>React | NodeJS| Express | MongoDB | MySQL | Firebase </h4>
                  <SocialMedia>
                  <a href="https://www.linkedin.com/in/evyatar-haim/" target="_blank"> 
                  <LinkedInIcon className="linkedin"/>
                  </a>

                  <a href="https://github.com/EvyatarHaim1?tab=repositories" target="_blank"> 
                  <GitHubIcon className="github"/>
                    </a> 

                    <a href="https://www.instagram.com/evyatarhaim1/" target="_blank"> 
                    <InstagramIcon className="instagram"/>
                    </a>    
                    
                    <a href="https://www.facebook.com/Evios" target="_blank"> 
                    <FacebookIcon className="facebook"/>
                    </a> 
                    
                     
                  </SocialMedia>
        </Div>
    )
}

export default Info;

const Div = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 60%;
height: 300px;
background-color: #A79344;
margin-left: 300px;
h1{
    margin-top: 20px;
    color: white;
    font-size:50px;
    margin-bottom: -20px;
}
p{
    color: white;
    font-size: 40px;
}
h4{
    color: white;
    margin-top: 10px;
    margin-bottom: 20px;
}
`
const SocialMedia = styled.div`
display:flex;
justify-content: center;
transition: transform 100ms ease-in;    
.linkedin{
    color: #24292E;
    font-size: 50px;
    :hover{
        color: #504846;
        transform: scale(1.15);
        cursor:pointer;
    }
}
.github{
    color: #24292E;
    font-size: 50px;
    margin-left: 15px;
    :hover{
        color: #504846;
        transform: scale(1.15); 
        cursor:pointer;
    }
}
.instagram {
    color: #24292E;
     font-size: 50px;
     margin-left: 15px;
     :hover{
        color: #504846;
        transform: scale(1.15);  
        cursor:pointer; 
     }
}
.facebook{
    color: #24292E;
    font-size: 50px;
    margin-left: 15px;
    :hover{
        color: #504846;
        transform: scale(1.15);
        cursor:pointer;
    }
    
}
`