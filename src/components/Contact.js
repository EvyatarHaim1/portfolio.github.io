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
                <MailOutlineIcon className="email" />
            </Icons>
            <Details>
                <h2 className="number">050-9098806</h2>
                <h2 className="address">evyataros1@gmail.com</h2>
            </Details>
        </Div>
    )
}

export default Contact;

const Div = styled.div`
max-width: 100%;
height: 300px;
background-color: #E8E1DE;
.phone , .email {
color: #24292E;
font-size: 60px;
margin-left: 150px;
margin-right: 150px;
:hover {
    color: #504846;
  }
}
h1{padding: 40px;
@media (max-width:320px){
    font-size:20px;
}
}
`
const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 600px){
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
}`

const Details = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2%;
@media(max-width: 600px){
    display: flex;
    flex-direction: column;
    margin-top:10%;
    align-items: center;
    font-size: 0.5rem;
    .number{
        margin-right: 60px;
        margin-top: -20px;
    }
    .address{
        margin-right: 150px;
        margin-top: 5px;
    }
}
.number{
    margin-left: 60px;
}
.address{
    margin-left: 150px;
}

`
