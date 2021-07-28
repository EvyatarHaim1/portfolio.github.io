import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Info() {

    const darkmode = useSelector((state) => state.setting.darkmode);

    return (
        <Container>
            <Div style={{ backgroundColor: darkmode ? '#212121' : '#A79344' }}>
                <h1 className="h1">Full Stack Web Developer</h1>
                <P1>............................................</P1>
                <h4>React | React-Native | NodeJS| Express | MongoDB | MySQL | Firebase </h4>
                <H4Mobile>
                    <p>
                        React | React-Native | NodeJS|
                    </p>
                    <p>
                        Express | MongoDB | MySQL | Firebase
                    </p>
                </H4Mobile>
                <SocialMedia>
                    <a href="https://www.linkedin.com/in/evyatar-haim/" target="_blank">
                        <LinkedInIcon className="linkedin" style={{ color: darkmode ? 'white' : '#24292E' }} />
                    </a>

                    <a href="https://github.com/EvyatarHaim1?tab=repositories" target="_blank">
                        <GitHubIcon className="github" style={{ color: darkmode ? 'white' : '#24292E' }} />
                    </a>

                    <a href="https://www.instagram.com/evyatarhaim1/" target="_blank">
                        <InstagramIcon className="instagram" style={{ color: darkmode ? 'white' : '#24292E' }} />
                    </a>

                    <a href="https://www.facebook.com/Evios" target="_blank">
                        <FacebookIcon className="facebook" style={{ color: darkmode ? 'white' : '#24292E' }} />
                    </a>


                </SocialMedia>
            </Div>
        </Container>
    )
}

export default Info;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width:800px){
    margin-top:20%;
}
`
const Div = styled.div`
display: flex;
flex-direction: column;
width: 60%;
height: 300px;
@media (max-width:900px){
width: 60%;
height: 200px;
}
h1{
    margin-top: 3%;
    margin-bottom: 2%;
    color: white;
    font-size:50px;
    @media (max-width:1100px){
        font-size:40px;
        margin-top:5%;
    }
    @media (max-width:900px){
        font-size:30px;
    }
    @media (max-width:680px){
    margin-top: 10%;
        font-size:20px;
    }
    @media (max-width:480px){
    font-size:15px;
    margin-top: 10%;
    margin-bottom: 10%;
    }
    
}
h4{
    color: white;
    margin-top: 10px;
    margin-bottom: 20px;
    @media (max-width:1100px){
        font-size:15px;
    }
    @media (max-width:900px){
        font-size:12px;
    }
    @media (max-width:650px){
        font-size:10px;
    }
    @media (max-width:481px){
        display: none;
    }
}
`
const SocialMedia = styled.div`
display:flex;
justify-content: space-around;
transition: transform 100ms ease-in;   
margin-right: auto;
margin-left: auto;
width: 60%;
.linkedin{
    font-size: 50px;
    :hover{
        color: #504846;
        transform: scale(1.15);
        cursor:pointer;
    }
    @media (max-width:450px){
    font-size: 40px;
    }
    @media (max-width:375px){
    font-size: 30px;
    }
    @media (max-width:305px){
    font-size: 20px;
    }
}
.github{
    font-size: 50px;
    :hover{
        color: #504846;
        transform: scale(1.15); 
        cursor:pointer;
    }
    @media (max-width:450px){
    font-size: 40px;
    }
    @media (max-width:375px){
    font-size: 30px;
    }
    @media (max-width:305px){
    font-size: 20px;
    }
}
.instagram {
     font-size: 50px;
     :hover{
        color: #504846;
        transform: scale(1.15);  
        cursor:pointer; 
     }
     @media (max-width:450px){
    font-size: 40px;
    }
    @media (max-width:375px){
    font-size: 30px;
    }
    @media (max-width:305px){
    font-size: 20px;
    }
}
.facebook{
    font-size: 50px;
    :hover{
        color: #504846;
        transform: scale(1.15);
        cursor:pointer;
    }
    @media (max-width:450px){
    font-size: 40px;
    }
    @media (max-width:375px){
    font-size: 30px;
    }
    @media (max-width:305px){
    font-size: 20px;
    }
}
`
const P1 = styled.p`
    color: white;
    font-size: 40px;
    @media (max-width:900px){
        display:none;
    }`

const H4Mobile = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    color: white;
    margin-bottom:10%;
    @media (min-width:481px){
        display:none
    }
    @media (max-width:321px){
        font-size: 7px;
    }
    `
