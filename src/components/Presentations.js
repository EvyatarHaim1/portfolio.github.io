import React from 'react'
import styled from 'styled-components';
import Memory from "../videos/Memory.mp4";
import Responsive from "../videos/Responsive.mp4";
import JennyTech from "../videos/JennyTech.mp4";
import Megical from "../videos/Megical.mp4";
import Reports from "../videos/Reports.mp4";
import TestingReports from "../videos/Testing Reports.mp4";
import Cypress from "../videos/Cypress.mp4";
import poster1 from "../images/presentations/v1.png";
import poster2 from "../images/presentations/v2.png";
import poster3 from "../images/presentations/v3.png";
import poster4 from "../images/presentations/v4.png";
import poster5 from "../images/presentations/v5.png";
import poster6 from "../images/presentations/v6.png";
import poster7 from "../images/presentations/v7.png";

const Presentations = () => {
    return (
        <Div>
            <Title>Presentation Videos</Title>
            <Box>
                <Details>
                    <h3>Full-Stack MERN Project Presentation:</h3>
                    <h3>React.js, Node.js, Express, MongoDB, Material-UI</h3>
                </Details>
                <video
                    controls
                    poster={poster1}
                    playInline
                >
                    <source
                        src={JennyTech}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>Full-Stack MERN Project Presentation:</h3>
                    <h3>React.js, Firebase, Figma, component-tree-structure, Material-UI</h3>
                </Details>
                <video controls
                    poster={poster2}
                    playInline
                >
                    <source
                        src={Megical}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>Full-Stack Mern project:</h3>
                    <h3>React.js, Rest-API,Postman, Chakra-UI, Figma</h3>
                </Details>
                <video controls
                    poster={poster5}
                    playInline
                >
                    <source
                        src={Reports}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>testing reports data filtering & sorting</h3>
                    <h3>React.js, Rest-API, Postman, Chakra-UI, Figma</h3>
                </Details>
                <video controls
                    poster={poster4}
                    playInline
                >
                    <source
                        src={TestingReports}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>Memory Game Cards</h3>
                    <h3>React.js, css animation, Sounds</h3>
                </Details>
                <video controls
                    poster={poster7}
                    playInline
                >
                    <source
                        src={Memory}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>Responsive Design for web application</h3>
                    <h3>React.js, Media-queries, Flex-box, TailwindCSS</h3>
                </Details>
                <video controls
                    poster={poster6}
                    playInline
                >
                    <source
                        src={Responsive}
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box>
                <Details>
                    <h3>Cypress Unit Testing - End to end example:</h3>
                    <h3>React.js, Cypress</h3>
                </Details>
                <video controls
                    poster={poster3}
                    playInline
                >
                    <source
                        src={Cypress}
                        type="video/mp4"
                    />
                </video>
            </Box>
        </Div>
    )
}

export default Presentations

const Div = styled.div`
margin-top:50px ;
display:flex;
flex-direction:column;
width: 70%;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
@media(max-width: 800px){
    width: 100%;
}
`
const Title = styled.h1`
color:white;`

const Box = styled.div`
padding: 20px 0px;
`
const Details = styled.div`
margin-bottom: 30px;
margin-top: 30px;

`