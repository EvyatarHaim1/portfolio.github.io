import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import fiverr from '../images/techTypes/fiverr.png';

const Services = () => {
    const darkmode = useSelector((state) => state.setting.darkmode);
    return (
        <Div darkmode={darkmode} >
            <Title>Services</Title>
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
                <a href="https://www.fiverr.com/appcode_js" target='_blank'>
                    <img width="150" height="150" src={fiverr} alt="logo" />
                </a>
            </div>
        </Div >
    )
}

export default Services;

const Div = styled.div`
padding: 60px;
background-size: cover;
background-repeat: no-repeat;
background: linear-gradient(rgba(25,25,25), rgba(255,255,255,.2)), url('https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/gifs%2FlightBG.gif?alt=media&token=e4abc34a-56c0-43dd-8751-a8a8fef027e1');
${({ darkmode }) => darkmode && `
color:white;
background: url('https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/gifs%2FdarkBG.gif?alt=media&token=ae1544f1-95f5-4c71-970f-7e26fdf9e08e')`}
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
`
const FiverrLink = styled.h1`
font-style: italic;
margin-top: 20px;
margin-bottom: 20px;
`