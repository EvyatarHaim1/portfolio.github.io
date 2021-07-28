import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

function Footer() {

    const darkmode = useSelector((state) => state.setting.darkmode);

    return (
        <Div style={{ backgroundColor: darkmode ? '#212121' : '#A79344' }}>
            <p style={{ color: darkmode && 'white' }}>Copyright © Evyatar Haim 2020 </p>
        </Div>
    )
}

export default Footer;

const Div = styled.div`
padding: 20px;
height: 40px;
bottom: 0;
text-align: center;
z-index: 100;
p{
    padding: 5px;
    font-size: 16px;
    font-weight: 600;
}
`
