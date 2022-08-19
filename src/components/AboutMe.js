import React from 'react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Div id="AboutMe">
            <h1> About Me </h1>
            <h3>In 2012, I've fulfilled a big dream of mine when I completed 3 years of intensive studies, specializing in Sound Engineering & Music Production in Kinneret Academy.
                For the following decade I worked as a studio technician in recording studios in Tel Aviv and my home studio. During that time I took part in the production & recording of A-WA band's debut album Habib Galbi. <br /><br />

                Through the years I've set another goal for myself - to learn of software development, coding and working with logical principles, such as those I used as a sound engineer. I became fascinated with the complex logic of these applications, as well as video games and other apps that I used on a daily basis, and started researching this industry.
                After a year of independent learning and inquiries, I decided to join the Elevation full-stack developer bootcamp and achieved this goal. <br /><br />

                I'm Evyatar,
                I'm a quick learner and a hard worker, I love to challenge myself and aim high. I consider myself a person of many interests and constantly strive for knowledge in various fields.
                I am experienced in JavaScript, HTML, CSS, SQL, MongoDB, jQuery, Bootstrap, React, Node.js, Express.Js, C#, Python, Unity, MERN applications and more. <br /><br />

                These days I am expanding my knowledge mainly in Unity software and specializing in the C# language. </h3>
        </Div>
    )
}

export default AboutMe;

const Div = styled.div`
display: flex;
padding-top: 80px;
padding-bottom: 80px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: #A79344;
color: white;
background-image: url("https://cutewallpaper.org/21/black-background-gif/Pin-on-Super-gif.gif");
h1{padding-bottom: 80px;
@media (max-width:350px){
    font-size:25px;
}
}
h3{width: 60%; 
    @media (max-width:550px){
      width:90%;
      text-align:left;
    }
    @media (max-width:250px){
    font-size:10px;
}
}`