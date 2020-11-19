import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Div>
            <p>Copyright © Evyatar Haim 2020 </p>
        </Div>
    )
}

export default Footer;

const Div = styled.div`
padding: 20px;
background-color: #A79344;
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
