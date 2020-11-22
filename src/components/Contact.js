import React from 'react';
import styled from 'styled-components';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Contact() {
    return (
        <Div id="Contact">
            <h1>Contact</h1>
            <Icons>
            <SettingsCellIcon className="phone" />
            <MailOutlineIcon className="email"/>
            </Icons>
            <Details>
            <h2 className="number">050-9098806</h2>
            <h2 className="address">Evyataros1@gmail.com</h2>
            </Details>
        </Div>
    )
}

export default Contact;

const Div = styled.div`
width: 100%;
height: 300px;
background-color: #F8EDE9;
.phone , .email {
color: #24292E;
font-size: 60px;
margin-left: 150px;
margin-right: 150px;
:hover {
    color: #504846;
  }
}
h1{padding: 40px;}
`
const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;`

const Details = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
.number{
    margin-left: 60px;
}
.address{
    margin-left: 150px;
}
`
