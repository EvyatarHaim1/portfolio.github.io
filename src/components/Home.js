import React from 'react';
import MyImage from './MyImage';
import Info from './Info';
import styled from 'styled-components';

function Home() {
    return (
        <Div id="Home">
            <MyImage className="myImg"/>
            <Info className="Info"/>
        </Div>
    )
}

export default Home;

const Div =styled.div`
height: 100vh;
max-width: 100vw;
background-image: url("https://i.pinimg.com/originals/80/40/b5/8040b5ff91ce8c3f153beebab39d584f.gif");

`
