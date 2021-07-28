import React from 'react';
import MyImage from './MyImage';
import Info from './Info';
import styled from 'styled-components';
import sky from '../images/sky.gif'
import night from '../images/night.gif'
import { useSelector } from 'react-redux';

function Home() {

    const darkmode = useSelector((state) => state.setting.darkmode);

    return (
        <Div id="Home" style={{ backgroundImage: `url(${night})` }}>
            <MyImage className="myImg" />
            <Info className="Info" />
        </Div>
    )
}

export default Home;

const Div = styled.div`
height: 100vh;
width: 100%;
`
