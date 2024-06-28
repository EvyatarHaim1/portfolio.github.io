import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import fiverr from '../images/techTypes/fiverr.png';
import darkBG from '../images/gifs/darkBG.gif';
import lightBG from '../images/gifs/lightBG.gif'

const Services = () => {
    const darkmode = useSelector((state) => state.setting.darkmode);
    return (
        <Div darkmode={darkmode} >
            <Title>My Freelance Services</Title>
            <Details>
                👨‍💻 Responsive design for Web applications -React.js, Next.js, Vue.js, Nuxt.js. <br />
                📲 React Native & Expo - Mobile development <br />
                💻 Full-stack development - MERN-stack: <br />
                🌁 Frontend - React.js, Next.js, Vue.js, Nuxt.js <br />
                🖥 Backend - Node.JS(Express.js), Firebase <br />
                📑 DB - MongoDB, Firebase, MySQL -Azure & AWS <br />
                ⚙️ Redux, Mobx - State management <br />
                🦖 PWA- Progressive Web App. <br />
                🎨 Css, html, javascript <br />
            </Details>
            <div>
                <FiverrLink>Checkout my Fiverr profile</FiverrLink>
                <a href="https://www.fiverr.com/evyatarhaim18" target='_blank' rel="noreferrer">
                    <img width="150" height="150" src={fiverr} alt="logo" />
                </a>
            </div>
        </Div >
    )
}

export default Services;

const Div = styled.div`
padding: 60px;
color: white;
background-size: cover;
background-repeat: no-repeat;
background: linear-gradient(rgba(25,25,25), rgba(255,255,255,.2)), url(${darkBG});
${({ darkmode }) => darkmode && `
background: url(${lightBG})
`};
@media (max-width:500px){
    padding: 10px;
}
`

const Title = styled.h1`
text-decoration: underline;
margin-bottom: 15px;
`
const Details = styled.h3`
text-align: left;
width: 50%;
margin-left: 30%;
line-height: 1.6;
margin-right: auto;
@media (max-width:500px){
    width: 100%;
    margin: 0;
}
`
const FiverrLink = styled.h1`
font-style: italic;
margin-top: 20px;
margin-bottom: 20px;
`