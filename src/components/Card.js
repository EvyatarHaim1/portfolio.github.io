import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppsIcon from '@material-ui/icons/Apps';

function Card({ src, title, github, appUrl, show }) {

    const darkmode = useSelector((state) => state.setting.darkmode);

    return (
        <Div style={{ display: show ? 'block' : 'none' }}>
            <a href={appUrl} target="_blank" rel="noreferrer">
                <img src={src}
                    alt="projectImg"
                />
                <div className="card_info">
                    <h2 style={{ color: darkmode ? 'white' : 'black' }}>{title}</h2>
                    <div className="links">
                        {github && <a href={github} target="_blank" rel="noreferrer">
                            <GitHubIcon className="github" style={{ color: darkmode ? 'white' : '#24292E' }} />
                        </a>}
                        {appUrl && <a href={appUrl} target="_blank" rel="noreferrer">
                            <AppsIcon className="appUrl" style={{ color: darkmode ? 'white' : '#24292E' }} />
                        </a>}
                    </div>
                </div>
            </a>
        </Div >
    )
}

export default Card;

const Div = styled.div`
margin: 10px;
border-radius: 10px;
width: 100%;
overflow: hidden;
box-shadow: 0px 6px 18px -9px rgba(0,0,0,0.75);
transition: transform 100ms ease-in;
:hover{
    transform: scale(1.07);
}
img {
    object-fit: fill;
    height: 300px;
    width: 100%;
    
}
.card_info {
    position: relative; 
    margin-top:-9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;
    p{
        display:flex;
        justify-content: space-between;
        width: 50px;
        }
    h2{
        font-size: 18px;
        font-weight: 600;
        @media (max-width:481px){
        font-size: 15px;
        }
        @media (max-width:350px){
        font-size: 12px;
        }
    }
    h4{
        font-size: 14px;
        font-weight: 300px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .price-rating{
        display: flex;
        position: sticky;
        bottom: 0;
        h3{flex: 1;}
        p{ flex: 0;}
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .appUrl, .github{
        }
    }
}
`